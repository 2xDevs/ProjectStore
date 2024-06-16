"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import { siteConfig } from "@/config/site"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 flex">
            <Link href={"/"} className="mr-6 flex items-center space-x-1">
        <Icons.logo className="h-6 w-6 md:h-12 md:w-12 " />
                <span className="text-base md:text-2xl font-bold ">
                    {siteConfig.name}
                </span>
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
                    <Link
                        href="/"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "/" ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/projects")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Projects
                    </Link>
                </nav>
        </div>
    )
}
