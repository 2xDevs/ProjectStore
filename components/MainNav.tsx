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
                <Icons.logo className="h-12 w-12" />
                <span className="text-2xl font-bold ">
                    {siteConfig.name}
                </span>
            </Link>
            {/* <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
                    <Link
                        to="/docs"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Docs
                    </Link>
                    <Link
                        to="/docs/components"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/docs/components")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Components
                    </Link>
                </nav> */}
        </div>
    )
}
