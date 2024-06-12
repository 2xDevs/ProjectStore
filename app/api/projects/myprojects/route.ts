import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/src";

// type Params = {
//     id: string;
// };

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        console.log(email);
        const projects = await prisma.userProject.findMany({
            where: {
                user: {
                    email: email,
                },
            },
            include: {
                project: true,
            },
        });
        return NextResponse.json({ projects });
    } catch (error) {}
}
