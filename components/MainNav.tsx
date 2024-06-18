"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import { siteConfig } from "@/config/site"
import { docsConfig } from "@/config/docs"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 flex">
            <Link href={"/"} className="flex items-center mr-4">
        <Icons.logo className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12 hidden sm:block mr-2" />
                <span className="text-base md:text-2xl font-medium md:font-bold">
                    {siteConfig.name}
                </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-4 text-sm lg:gap-6">
                {docsConfig.mainNav.map((item, index) => (
                     <Link key={index}
                     href={item.href!}
                     className={cn(
                         "transition-colors hover:text-foreground/80",
                         pathname === item.href ? "text-foreground" : "text-foreground/60"
                     )}
                 >
                     {item.title}
                 </Link>
                ))}
                </nav>
        </div>
    )
}
