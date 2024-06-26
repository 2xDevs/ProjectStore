"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProjectType } from "@/types/project";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Project = ({ ProjectData }: { ProjectData: ProjectType }) => {
    const pathname = usePathname()
   
    return (
        <div className="relative overflow-hidden rounded-lg max-w-sm sm:max-w-xs border-foreground shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link
                href={`/projects/${ProjectData.id}`}
                className="absolute inset-0 z-10"
                prefetch={false}
            >
                <span className="sr-only">View Project</span>
            </Link>
            <div className="aspect-video relative w-full">
                <Image
                    className="object-cover object-center w-full max-h-[240px] sm:max-h-[200px]"
                    src={ProjectData.image}
                    alt={ProjectData.title}
                    width={854}
                    height={480}
                />
                <h3 className="absolute bottom-0 px-2 pb-2 [text-shadow:1px_1px_20px_black,_0_0_0.2em_black,_0_0_2em_black]  w-full font-bold text-xl">
                    {ProjectData.title}
                </h3>
            </div>

            <div className="p-4">
                <div className="mt-2 flex gap-2 overflow-hidden">
                    {ProjectData.categories.map((category, index) => (
                        <span
                            key={index}
                            className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-[0.65rem]"
                        >
                            {category}
                        </span>
                    ))}
                    {ProjectData.languages.map((language, index) => (
                        <span
                            key={index}
                            className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-[0.65rem]"
                        >
                            {language}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h4 className="font-semibold text-lg md:text-xl">
                        ₹{ProjectData.price}
                    </h4>
                    {pathname === "/" || pathname === "/projects" ? <> <Button
                                // onClick={handleRemoveFromCart}
                            >
                                View Project
                            </Button></> : (ProjectData.price ? (
                        // isInCart ? (
                        //     <Button
                        //         className="z-20 bg-destructive"
                        //         // onClick={handleRemoveFromCart}
                        //     >
                        //         Remove from cart
                        //     </Button>
                        // ) : (
                        //     <Button
                        //         className="z-20"
                        //         // onClick={handleAddToCart}
                        //     >
                        //         Add to cart
                        //     </Button>
                        // )
                        <></>
                    ) : (
                        <Button className="z-20 w-full">Download</Button>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};
