"use client";

import { MainNav } from "@/components/MainNav";
import { MobileNav } from "@/components/MobileNav";
import UserLoggedIn from "./UserLoggedIn";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CommandMenu } from "./CommandMenu";
import { ProjectsType } from "@/types/project";

export function SiteHeader({AllProjects}: {AllProjects: ProjectsType}) {
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", "system");
        }
    }, []);
    return (
        <header className="sticky top-0 z-50 py-2 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MobileNav />
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex flex-1 justify-end md:w-auto md:flex-none">
                        <CommandMenu Projects={AllProjects} />
                    </div>
                    <nav className="flex items-center">
                        <UserLoggedIn />
                    </nav>
                </div>
            </div>
        </header>
    );
}

