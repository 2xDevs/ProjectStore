import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type ProjectData = {
    image: string;
    title: string;
    belongsTo: string;
    price?: string;
};

export type ProjectsType = ProjectData[];

type ProjectsProps = {
    ProjectsData: ProjectsType;
};

export const Projects = ({ ProjectsData }: ProjectsProps) => {
    return (
        <>
            {ProjectsData.map((data, index) => {
                return (
                    <>
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                        >
                            <Link
                                href="#"
                                className="absolute inset-0 z-10"
                                prefetch={false}
                            >
                                <span className="sr-only">View Project</span>
                            </Link>
                            <Image
                                src={data.image}
                                alt="Project 1"
                                width={500}
                                height={400}
                                className="object-cover w-full h-64"
                            />
                            <div className="bg-white p-4 dark:bg-gray-950">
                                <h3 className="font-bold text-xl">
                                    {data.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {data.belongsTo}
                                </p>
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-lg md:text-xl">
                                        {data.price}
                                    </h4>
                                    {data.price ? <Button>Buy Now</Button> : <Button className="w-full mt-2">Download</Button>}
                                    
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};
