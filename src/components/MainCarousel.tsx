"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ProjectsType } from "@/types/project";
import Link from "next/link";

export const MainCarousel = ({
  CarouselProjects,
}: {
  CarouselProjects: ProjectsType | null;
}) => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full max-w-screen-lg"
      onMouseEnter={() => plugin.current.stop}
      onMouseLeave={() => plugin.current.play}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {CarouselProjects!.map((Project, index) => (
          <CarouselItem key={index}>
            <div className="flex aspect-[16/9] h-full w-full justify-center p-2">
              <Link href={`/projects/${Project.id}`}>
                <Image
                  src={Project.image}
                  width={1920}
                  height={1080}
                  className="h-full w-full rounded-lg"
                  alt={Project.title}
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
};
