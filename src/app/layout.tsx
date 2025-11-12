import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import TopNav from "./_components/TopNav";

export const metadata: Metadata = {
  title: "TS Gallery",
  description: "TS Gallery is a collection of TypeScript projects",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html className={`${geist.variable}`} lang="en">
        <body className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center border-b border-gray-50 text-xl p-4">
            <Link href="/" className="text-2xl font-bold">
              TS Gallery
            </Link>
            <TopNav />
          </header>
          {children}
          <footer className="text-center text-sm text-gray-500 p-4">
            <p>&copy; {new Date().getFullYear()} TS Gallery</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
