"use client"

import { MainNav } from "@/components/MainNav"
import { MobileNav } from "@/components/MobileNav"
import UserLoggedIn from "./UserLoggedIn"
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname()
  useEffect(() => {
      if (typeof window !== "undefined") {
          localStorage.setItem("theme", "system");
      }
  }, []);
  return (
    <header className="sticky top-0 z-50 py-2 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* <MobileNav /> */}
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
           <input type="search" />
          </div>
          <nav className="flex items-center">
            <UserLoggedIn />
          </nav>
        </div>
      </div>
    </header>
  )
}