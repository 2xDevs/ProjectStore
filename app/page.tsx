import React from "react";
import { MainCarousel } from "@/components/MainCarousel";
import { getAllProjects } from "@/lib/server";
import { ProjectsType } from "@/types/project";
import { Project } from "@/components/Project";
import { Description } from "@radix-ui/react-dialog";

export default async function Home() {
    const CarouselProjects = await getAllProjects();

    const ProjectSectionData = [
        {
            id: "latest",
            title: "Latest Creative Projects",
            description:
                "Discover the latest and most innovative creative projects from our talented community.",
            Projects: await getAllProjects(),
        },
        {
            id: "popular",
            title: "Popular Creative Projects",
            description:
                "Explore the most popular and sought-after creative projects from our talented community.",
            Projects: await getAllProjects(),
        },
        {
            id: "featured",
            title: "Featured Creative Projects",
            description:
                "Discover our hand-picked selection of the most impressive and captivating creative projects.",
            Projects: await getAllProjects(),
        },
    ];
    return (
        <main className="flex-1">
            <section className="w-full flex justify-center pt-16">
                {/* Carosel for the Home Page */}
                <MainCarousel CarouselProjects={CarouselProjects} />
            </section>

            {ProjectSectionData.map((SectionData, index) => (
                <ProjectSection
                    key={index}
                    id={SectionData.id}
                    title={SectionData.title}
                    description={SectionData.description}
                    Projects={SectionData.Projects}
                />
            ))}
        </main>
    );
}

const ProjectSection = ({
    id,
    title,
    description,
    Projects,
}: {
    id: string;
    title: string;
    description: string;
    Projects: ProjectsType | null;
}) => {
    return (
        <section id={id} className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        {title}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {description}
                    </p>
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
