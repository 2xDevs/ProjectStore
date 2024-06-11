"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";

export const UserProfile = () => {
    const session = useSession();
    return (
        <>
            <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                    <Image
                        className="rounded-full h-20 w-20"
                        src={
                            session.data?.user?.image ||
                            "https://res.cloudinary.com/dckbkdfyi/image/upload/f_auto,q_auto/ooisz8enzqbpeetkditn"
                        }
                        height={208}
                        width={208}
                        alt="profile"
                    />
                    <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <div className="text-2xl font-bold">
                        {session.data?.user?.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                        {session.data?.user?.email}
                    </div>
                </div>
            </div>
        </>
    );
};
