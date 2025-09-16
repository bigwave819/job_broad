'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          <Navbar/>
          <main className="container mx-auto px-4 py-8">
            <SessionProvider>
              {children}
            </SessionProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
