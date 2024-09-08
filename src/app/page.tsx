import React from "react";
import { MainCarousel } from "@/components/MainCarousel";
import { getAllCachedProjects } from "@/lib/server";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectSkeleton } from "@/components/ProjectSkeleton";
import ProjectSection from "@/components/ProjectSection";

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

  const description =
    "Explore a wide selection of ready-made, fully-documented CSE projects designed to boost your skills and help you succeed. From AI to Web Development, we’ve got you covered!";

  return (
    <main className="flex-1">
      <section
        id="hero"
        className="mx-auto flex max-w-screen-2xl justify-center pb-12 pt-16 md:pb-24 lg:pb-32"
      >
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
