"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession();
    return (
        <div className="">
            <div>Profile</div>
            <div>
                <img
                    className="rounded-full h-52"
                    src={
                        session.data?.user?.image ||
                        "https://res.cloudinary.com/dckbkdfyi/image/upload/f_auto,q_auto/ooisz8enzqbpeetkditn"
                    }
                    alt="profile"
                />
            </div>
            <div>Name: {session.data?.user?.name}</div>
            <div>Email: {session.data?.user?.email}</div>
        </div>
    );
}
