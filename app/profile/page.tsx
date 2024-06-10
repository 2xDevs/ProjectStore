"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Profile() {
    const session = useSession();
    if (!session?.data?.user) {
        redirect("/api/auth/signin");
    }
    return (
        <div className="">
            <div>Profile</div>
            <div>
                <Image
                    className="rounded-full"
                    src={session.data?.user?.image!}
                    alt="profile"
                    width={100}
                    height={100}
                />
            </div>
            <div>Name: {session.data?.user?.name}</div>
            <div>Email: {session.data?.user?.email}</div>
        </div>
    );
}
