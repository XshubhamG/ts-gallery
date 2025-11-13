import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { extractRouterConfig } from "uploadthing/server";
import TopNav from "./_components/TopNav";
import { ourFileRouter } from "./api/uploadthing/core";

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
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
				<body className="mx-auto max-w-7xl">
					<header className="flex items-center justify-between border-gray-50 border-b p-4 text-xl">
						<Link className="font-bold text-2xl" href="/">
							TS Gallery
						</Link>
						<TopNav />
					</header>
					{children}
					<footer className="p-4 text-center text-gray-500 text-sm">
						<p>&copy; {new Date().getFullYear()} TS Gallery</p>
					</footer>
				</body>
			</html>
		</ClerkProvider>
	);
}
