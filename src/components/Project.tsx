"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProjectType } from "@/types/project";
import { usePathname } from "next/navigation";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

export const Project = ({ project }: { project: ProjectType }) => {
    const pathname = usePathname();

    return (
        <Card
            key={project.id}
            className="relative flex h-full max-w-sm flex-col rounded-lg border bg-card shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl sm:max-w-xs"
        >
            <img
                className="max-h-[240px] w-full rounded-lg rounded-bl-none rounded-br-none object-cover object-center sm:max-h-[200px]"
                src={project.image}
                alt={project.title}
            />
            <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="line-clamp-2 text-muted-foreground">
                    {project.description ? project.description : ""}
                </p>
                <div className="mt-4 flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm">4.5</span>
                </div>
                <div className="mt-2 space-x-2 overflow-hidden">
                    {project.categories.map((language: any) => (
                        <span className="rounded-md bg-muted px-2 py-1 text-[0.65rem] text-muted-foreground">
                            {language}
                        </span>
                    ))}
                    {project.categories.map((language: any) => (
                        <span className="rounded-md bg-muted px-2 py-1 text-[0.65rem] text-muted-foreground">
                            {language}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                    ₹{project.price?.toFixed(2)}
                </span>
                <Button>View Project</Button>
            </CardFooter>
        </Card>
    );
};
