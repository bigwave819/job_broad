import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { authOptions } from "@/lib/auth"

export async function POST(request: Request) {

    const session = await getServerSession(authOptions)

    if (!session?.user || !session.user.id) {
        return NextResponse.redirect(new URL("/auth/singin", request.url));
    }

    try {
        const data = await request.json()

        const job = await prisma.job.create({
            data: {
                ...data,
                postedById: session.user.id
            }
        })

        return NextResponse.json(job);
    } catch (error) {
        console.log("error while creating task", error);
        return new NextResponse("internal server error", { status:500 })
    }
}

export async function GET(request: Request) { 

    try {
        const jobs = await prisma.job.findMany({
            orderBy: {
                postedAt: "desc"
            }
        })
        return NextResponse.json(jobs);
    } catch (error) {
        console.log("error while creating task", error);
        return new NextResponse("internal server error", { status:500 })
    }
}