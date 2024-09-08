"use client";

import { MainNav } from "@/components/MainNav";
import { MobileNav } from "@/components/MobileNav";
import UserLoggedIn from "./UserLoggedIn";
import { CommandMenu } from "./CommandMenu";
import { ProjectsType } from "@/types/project";
import { useEffect } from "react";
import { useReadingProgress } from "./useReadingProgress";
import { Cartsheet } from "@/components/CartSheet";

export function SiteHeader({ AllProjects }: { AllProjects: ProjectsType }) {
    const completion = useReadingProgress();
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("theme") == null || undefined || "") {
                localStorage.setItem("theme", "system");
            }
        }
    }, []);
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-3">
                    <MobileNav />
                    <MainNav />
                    <div className="flex flex-1 items-center justify-end">
                        <nav className="flex sm:space-x-3">
                            <CommandMenu Projects={AllProjects} />
                            <UserLoggedIn />
                            {/* <Link
                href="/cart"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "px-1 pr-2 pt-1",
                )}
              >
                <Icons.emptyCart className="h-6 w-6 sm:h-8 sm:w-8" />
              </Link> */}
                            <Cartsheet />
                        </nav>
                    </div>
                </div>
                <span
                    style={{ transform: `translateX(${completion - 100}%)` }}
                    className="absolute bottom-0 h-1 w-full bg-primary transition-transform duration-100"
                />
            </header>
        </>
    );
}
