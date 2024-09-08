import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { Providers } from "./providers";
import { getAllCachedProjects } from "@/lib/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Project Store",
    description: "Created by 2xdevlopers",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const AllProjects = await getAllCachedProjects();
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SiteHeader AllProjects={AllProjects!} />
                        {children}
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
