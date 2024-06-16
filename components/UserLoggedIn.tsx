"use client";

import { CheckIcon, LogOut, Moon, Sun, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "./ModeToggle";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function UserLoggedIn() {
    const pathname = usePathname();
    const session = useSession();
    const router = useRouter();
    const { setTheme } = useTheme();
    const [userTheme, setUserTheme] = useState("system");
    useEffect(() => {
        if (typeof window !== "undefined") {
            const theme = localStorage.getItem("theme") || "system";
            setUserTheme(theme);
            setTheme(theme);
        }
    }, [setTheme]);
    return (
        <div className="flex px-2 py-1 h-10 items-center gap-4">
            {session.data?.user ? (
                <>
                    <Link
                        href="/profile#my-projects"
                        className={cn(
                            "transition-colors hidden md:block text-xs md:text-base hover:text-foreground/80",
                            pathname === "/profile#my-projects"
                                ? "text-foreground"
                                : "text-foreground/60",
                        )}
                    >
                        My Projects
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image
                                className="rounded-full h-8 cursor-pointer"
                                src={
                                    session.data?.user.image ||
                                    "https://res.cloudinary.com/dckbkdfyi/image/upload/f_auto,q_auto/ooisz8enzqbpeetkditn"
                                }
                                width={32}
                                height={32}
                                alt="profile"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56"
                            align="end"
                            alignOffset={-5}
                            sideOffset={21}
                        >
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                onClick={() => {
                                    router.push("/profile");
                                }}
                            >
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                                    <span>Appreance : {userTheme}</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "theme",
                                                    "light",
                                                );
                                                setUserTheme("light");
                                                setTheme("light");
                                            }}
                                        >
                                            Light
                                            {userTheme == "light" && (
                                                <DropdownMenuShortcut>
                                                    <CheckIcon className="h-4 w-4" />
                                                </DropdownMenuShortcut>
                                            )}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "theme",
                                                    "dark",
                                                );
                                                setUserTheme("dark");
                                                setTheme("dark");
                                            }}
                                        >
                                            Dark
                                            {userTheme == "dark" && (
                                                <DropdownMenuShortcut>
                                                    <CheckIcon className="h-4 w-4" />
                                                </DropdownMenuShortcut>
                                            )}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "theme",
                                                    "system",
                                                );
                                                setUserTheme("system");
                                                setTheme("system");
                                            }}
                                        >
                                            System
                                            {userTheme == "system" && (
                                                <DropdownMenuShortcut>
                                                    <CheckIcon className="h-4 w-4" />
                                                </DropdownMenuShortcut>
                                            )}
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuItem
                                onClick={async () => {
                                    await signOut();
                                }}
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Sign out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <>
                    <Button
                        variant={"outline"}
                        className="mr-2 text-base font-medium"
                        onClick={async () => {
                            await signIn();
                        }}
                    >
                        SignIn
                    </Button>
                    <ModeToggle />
                </>
            )}
        </div>
    );
}
