"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Profile() {
    const session = useSession()
    if (!session?.data?.user) {
        redirect('/api/auth/signin')
    }
    return (<div className="">
        <div>
        Profile
        </div>
        <div><img className="rounded-full" src={session.data?.user?.image || ""} alt="profile" /></div>
        <div>Name: {session.data?.user?.name}</div>
        <div>Email: {session.data?.user?.email}</div>
    </div>)
}