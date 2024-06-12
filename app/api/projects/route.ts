import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/src";
type ResponseData = {
    id: number;
    image: string;
    title: string;
    categories: string[];
    languages: string[];
    price?: number;
};

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {
    try {
        const projects = await prisma.project.findMany({
            select: {
                id: true,
                image: true,
                title: true,
                categories: true,
                languages: true,
                price: true
            }
        });
        return NextResponse.json({ projects });
    } catch (error) {}
}
