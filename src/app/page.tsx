import React from "react";
import { MainCarousel } from "@/components/MainCarousel";
import { getAllCachedProjects } from "@/lib/server";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectSkeleton } from "@/components/ProjectSkeleton";
import ProjectSection from "@/components/ProjectSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomePage from "@/components/HomePage";

export default async function Home() {
    const CarouselProjects = await getAllCachedProjects();

    const description =
        "Explore a wide selection of ready-made, fully-documented CSE projects designed to boost your skills and help you succeed. From AI to Web Development, we’ve got you covered!";

    return <HomePage CarouselProjects={CarouselProjects} />;
}

const ProjectSectionSkeleton = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto grid place-items-center gap-8 md:px-6">
                <div className="flex w-full items-center justify-center sm:justify-between">
                    <Skeleton className="hidden h-12 w-80 sm:flex" />
                    <Skeleton className="hidden h-10 w-32 sm:flex" />
                    <Skeleton className="h-12 min-w-48 max-w-80 sm:hidden" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 4 }, (_, index) => (
                        <ProjectSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
