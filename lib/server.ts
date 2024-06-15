import { ProjectType, ProjectsType } from "@/types/project";
import prisma from "../prisma/src/index";



export async function getAllProjects(): Promise<ProjectsType | null> {
    try {
        const projects = await prisma.project.findMany({
            select: {
                id: true,
                image: true,
                title: true,
                categories: true,
                languages: true,
                price: true,
            },
        });
        return projects;
    } catch (error: any) {
        console.log(error.message);
        return null
    }
}

export async function getProject(id: string): Promise<ProjectType | null> {
    try {
        const ProjectId: number = Number(id);
        const project = await prisma.project.findUnique({
            where: {
                id: ProjectId,
            },
        });
        return project;

    } catch (error: any) {
        console.log(error.message);
        return null;
    }
}

export async function getMyProjects(email: string): Promise<ProjectsType | null> {
    try {
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
        return projects;
    } catch (error: any) {
        console.log(error.message);
        return null;
    }
}
