import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/src";

// type Params = {
//     id: string;
// };

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        console.log(email);
        const projects = await prisma.userProject
            .findMany({
                where: {
                    user: {
                        email: email,
                    },
                },
                select: {
                    project: {
                        select: {
                            id: true,
                            title: true,
                            image: true,
                            filelink: true,
                            categories: true,
                            languages: true,
                            price: true,
                        },
                    },
                },
            })
            .then((userProjects) => userProjects.map((up) => up.project));
        return NextResponse.json({ projects });
    } catch (error) {}
}
