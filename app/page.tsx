import React from "react";
import { MainCarousel } from "@/components/MainCarousel";
import { getAllCachedProjects } from "@/lib/server";
import { ProjectsType } from "@/types/project";
import { Project } from "@/components/Project";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronsRight } from "lucide-react";

export default async function Home() {
    const CarouselProjects = await getAllCachedProjects();

    const ProjectSectionData = [
        {
            id: "latest",
            title: "Latest Projects",
            Projects: await getAllCachedProjects(),
        },
        {
            id: "popular",
            title: "Popular Projects",
            Projects: await getAllCachedProjects(),
        },
        {
            id: "featured",
            title: "Featured Projects",
            Projects: await getAllCachedProjects(),
        },
    ];
    return (
        <main className="flex-1">
            <section className="flex justify-center pb-12 pt-16 md:pb-24 lg:pb-32">
                <MainCarousel CarouselProjects={CarouselProjects} />
            </section>

            {ProjectSectionData.map((SectionData, index) => (
                <ProjectSection
                    key={index}
                    id={SectionData.id}
                    title={SectionData.title}
                    Projects={SectionData.Projects}
                />
            ))}
        </main>
    );
}

const ProjectSection = ({
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
                            <ArrowRightIcon />
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
