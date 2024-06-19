import React from "react";
import { MainCarousel } from "@/components/MainCarousel";
import { getAllCachedProjects } from "@/lib/server";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectSkeleton } from "@/components/ProjectSkeleton";

const DynamicComponent = dynamic(
    () =>
        import("@/components/ProjectSection").then((mod) => mod.ProjectSection),
    {
        loading: () => <ProjectSectionSkeleton />,
        ssr: false,
    },
);

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
                <DynamicComponent
                    key={index}
                    id={SectionData.id}
                    title={SectionData.title}
                    Projects={SectionData.Projects}
                />
            ))}
        </main>
    );
}

const ProjectSectionSkeleton = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 place-items-center md:px-6">
                <div className="flex w-full items-center justify-center sm:justify-between">
                    <Skeleton className="hidden sm:flex h-12 w-80" />
                    <Skeleton className="hidden sm:flex h-10 w-32" />
                    <Skeleton className="sm:hidden h-12 min-w-48 max-w-80" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }, (_, index) => (
                        <ProjectSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

