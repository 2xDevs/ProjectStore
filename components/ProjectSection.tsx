"use client";

import { cn } from "@/lib/utils";
import { ProjectsType } from "@/types/project";
import { ArrowRightIcon, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { Project } from "./Project";
import { buttonVariants } from "./ui/button";

export const ProjectSection = ({
    id,
    title,
    Projects,
}: {
    id: string;
    title: string;
    Projects: ProjectsType | null;
}) => {
    return (
        <section id={id} className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 place-items-center md:px-6">
                <div className="flex w-full items-center justify-center sm:justify-between">
                    <Link
                        href="/projects"
                        className="group text-2xl flex items-center font-bold sm:hidden"
                    >
                        {title}
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-100">
                            <ChevronsRight />
                        </span>
                    </Link>
                    <h2 className="hidden sm:flex font-bold md:text-4xl">
                        {title}
                    </h2>
                    <Link
                        href="/projects"
                        prefetch={true}
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "group hidden sm:flex",
                        )}
                    >
                        View All
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-100">
                            <ArrowRightIcon className="h-4 w-4" />
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Projects?.map((ProjectData, index) => (
                        <Project key={index} ProjectData={ProjectData} />
                    ))}
                </div>
            </div>
        </section>
    );
};

