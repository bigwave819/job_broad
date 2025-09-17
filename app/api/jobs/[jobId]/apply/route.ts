import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"

export async function POST(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user.id) {
    return NextResponse.redirect(new URL("/auth/singin", request.url));
  }

  try {
    const { jobId } = await params;
    const job = await prisma.job.findUnique({ where: { id: jobId } });

    if (!job) {
      return new NextResponse("Job not found", { status: 404 });
    }

    const existingApplication = await prisma.application.findFirst({
      where: {
        jobId: jobId,
        userId: session.user.id,
      },
    });

    if (existingApplication) {
      return new NextResponse("You already have applied for this job", {
        status: 400,
      });
    }

    const application = await prisma.application.create({
      data: {
        jobId: jobId,
        userId: session.user.id,
        status: "PENDING",
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
