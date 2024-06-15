import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProjectType } from "@/types/project";

export const Project = ({ ProjectData }: { ProjectData: ProjectType }) => {
    return (
        <div className="relative overflow-hidden rounded-lg max-w-xs shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link
                href={`/projects/${ProjectData.id}`}
                className="absolute inset-0 z-10"
                prefetch={false}
            >
                <span className="sr-only">View Project</span>
            </Link>
            <div className="aspect-video relative w-full">
                <Image
                    className="object-cover object-center w-full max-h-[200px]"
                    src={ProjectData.image}
                    alt="Project 1"
                    width={854}
                    height={480}
                />
                <h3 className="absolute bottom-0 px-2 pb-2 [text-shadow:1px_1px_20px_black,_0_0_0.2em_black,_0_0_2em_black]  w-full font-bold text-xl">
                    {ProjectData.title}
                </h3>
            </div>

            <div className="bg-white p-4 dark:bg-gray-950">
                <div className="mt-2 flex gap-2 overflow-hidden">
                    {ProjectData.categories.map((category, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[0.65rem]"
                        >
                            {category}
                        </span>
                    ))}
                    {ProjectData.languages.map((language, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[0.65rem]"
                        >
                            {language}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <h4 className="font-semibold text-lg md:text-xl">
                        {ProjectData.price}
                    </h4>
                    {ProjectData.price ? (
                        <Button>Buy Now</Button>
                    ) : (
                        <Button className="w-full">Download</Button>
                    )}
                </div>
            </div>
        </div>
    );
};
