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
import Link from 'next/link';

export const MainCarousel = ({
    CarouselProjects,
}: {
    CarouselProjects: ProjectsType | null;
}) => {
    const plugin = React.useRef(Autoplay({ delay: 2000 }));

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen-lg"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
            opts={{
                loop: true
            }}
        >
            <CarouselContent>
                {CarouselProjects!.map((Project, index) => (
                    <CarouselItem key={index}>
                        <div className="flex [aspect-ratio:16/10] h-full w-full justify-center p-2">
                            <Link href={`/projects/${Project.id}`}>
                                <Image
                                    src={Project.image}
                                    width={1920}
                                    height={1080}
                                    className="h-full w-full rounded-lg"
                                    alt="Projects"
                                />
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
