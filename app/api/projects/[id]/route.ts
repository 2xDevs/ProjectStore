import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/src";

type Params = {
    id: string;
};

export async function GET(req: NextRequest, context: { params: Params }) {
    try {
        const id = Number(context.params.id);
        const projects = await prisma.project.findUnique({
            where: {
                id: id,
            },
        });
        return NextResponse.json({ projects });
    } catch (error) {}
}
