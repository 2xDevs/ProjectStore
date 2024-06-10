"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";


export default function UserLoggedIn () {
    const session = useSession();
    return (<div className="flex px-2 py-1 h-10">
        {session.data?.user ?
            <>
                <Link href="/profile">
                    <Image className="rounded-full h-10" src={session.data?.user.image || ""} alt="profile" />
                </Link>
                <button className="px-2 py-1 mx-3 border rounded-sm border-white" onClick={async () => {
                    await signOut()
                }}>SignOut</button>
            </>
            :
            <button className="px-2 py-1 mx-3 border rounded-sm border-white" onClick={async () => {
                await signIn()
            }}>SignIn</button>
        }
    </div>)
}