import { Button } from "@/components/ui/button";
import { ProjectType } from "@/types/project";
import Image from "next/image";

export const SingleProject = ({ Project }: { Project: ProjectType }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900">
            <div className="relative">
                <div className="h-64 sm:h-80 md:h-96">
                    <Image
                        src={Project.image}
                        alt="Project 1"
                        width={500}
                        height={400}
                        className="object-cover w-full h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        Sleek Project
                    </h2>
                </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <p className="text-gray-500 dark:text-gray-400 mb-4 sm:mb-0 max-w-md">
                    Discover the power of our sleek and modern project. Packed
                    with cutting-edge features, its the perfect solution for
                    your business needs.
                </p>
                <Button className="w-full sm:w-auto">Buy Now</Button>
            </div>
        </div>
    );
};
