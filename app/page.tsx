import { Projects, ProjectsType } from "@/components/Projects";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import Image from "next/image";
import React from "react";

const getAllProjects = async () => {
    const response = await axios.get("http://localhost:3000/api/projects");
    return response.data.projects;
};

export default async function Home() {
    const LatestProjects: ProjectsType = await getAllProjects();
    const PopularProjects: ProjectsType = await getAllProjects();
    return (
        <main className="flex-1">
            <section className="w-full h-screen flex justify-center items-center">
                <Carousel className="w-full max-w-lg">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="flex aspect-video h-full w-full justify-center p-2">
                                    <Image
                                        src="https://picsum.photos/200"
                                        width={100}
                                        height={100}
                                        className="h-full w-full rounded-lg"
                                        alt="Projects"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <section id="latest" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Latest Creative Projects
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover the latest and most innovative creative
                            projects from our talented community.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <Projects ProjectsData={LatestProjects} />
                    </div>
                </div>
            </section>

            <section
                id="popular"
                className="w-full py-12 md:py-24 lg:py-32 bg-gray-500 dark:bg-gray-800"
            >
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Popular Creative Projects
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Explore the most popular and sought-after creative
                            projects from our talented community.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <Projects ProjectsData={PopularProjects} />
                    </div>
                </div>
            </section>

            <section id="featured" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Featured Creative Projects
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover our hand-picked selection of the most
                            impressive and captivating creative projects.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <Projects ProjectsData={PopularProjects} />
                    </div>
                </div>
            </section>
        </main>
    );
}
