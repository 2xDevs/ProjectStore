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
import { ProjectsType } from "./Projects";
import Image from "next/image";

export const MainCarousel = ({
    CarouselProjects,
}: {
    CarouselProjects: ProjectsType;
}) => {
    const plugin = React.useRef(Autoplay({ delay: 2000 }));

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen-lg"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {CarouselProjects.map((Project, index) => (
                    <CarouselItem key={index}>
                        <div className="flex [aspect-ratio:16/10] h-full w-full justify-center p-2">
                            <Image
                                src={Project.image}
                                width={100}
                                height={100}
                                className="h-full w-full rounded-lg"
                                alt="Projects"
                                unoptimized={true}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
