"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar } from "./ui/avatar";

export const UserProfile = () => {
    const session = useSession();
    return (
        <>
            <div className="flex flex-col gap-6 items-center sm:flex-row">
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
                </Avatar>
                <div id="my-projects" className="grid gap-1">
                    <div className="text-2xl font-bold text-center sm:text-start">
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
