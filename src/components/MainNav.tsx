"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { siteConfig } from "@/config/site";
import { docsConfig } from "@/config/docs";

export function MainNav() {
    const pathname = usePathname();

    return (
        <div className="mr-4 flex">
            <Link href={"/"} className="flex items-center lg:mr-4">
                <Icons.logo className="mr-2 hidden h-6 w-6 sm:block md:h-10 md:w-10 lg:h-12 lg:w-12" />
                <span className="text-base font-medium md:text-2xl md:font-bold">
                    {siteConfig.name}
                </span>
            </Link>
            <nav className="hidden items-center gap-4 text-sm lg:flex lg:gap-6">
                {docsConfig.mainNav.map((item, index) => (
                    <Link
                        key={index}
                        //@ts-ignore
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === item.href
                                ? "text-foreground"
                                : "text-foreground/60",
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
