"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
    const session = useSession();
    return (
        <div className="">
            <div>Profile</div>
            <div>
                <Image
                    className="rounded-full h-52"
                    src={
                        session.data?.user?.image ||
                        "https://res.cloudinary.com/dckbkdfyi/image/upload/f_auto,q_auto/ooisz8enzqbpeetkditn"
                    }
                    height={208}
                    width={208}
                    alt="profile"
                />
            </div>
            <div>Name: {session.data?.user?.name}</div>
            <div>Email: {session.data?.user?.email}</div>
        </div>
    );
}
