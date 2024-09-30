"use client";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ProjectsType } from "@/types/project";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MainCarousel = ({
    CarouselProjects,
}: {
    CarouselProjects: ProjectsType | null;
}) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const plugin = useRef(Autoplay({ delay: 3000 }));

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="relative w-full max-w-4xl pb-16"
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="m-0">
                    {CarouselProjects!.map((Project, index) => (
                        <CarouselItem className="px-4" key={index}>
                            <div className="aspect-[16/10] h-full w-full object-center">
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
                <div className="absolute bottom-0 flex w-full justify-between px-6">
                    <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-3">
                        <div className="flex gap-2">
                            {CarouselProjects?.map((_, index) => (
                                <div
                                    onClick={() => {
                                        api?.scrollTo(index);
                                        setCurrent(index + 1);
                                    }}
                                    className={`h-3 rounded-full transition-all duration-300 ${current === index + 1 ? "w-12 bg-foreground" : "w-3 bg-muted/40"}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <CarouselPrevious className="static" />
                        <CarouselNext className="static" />
                    </div>
                </div>
            </Carousel>
        </>
    );
};
