import { CartType, ProjectType } from "@/types/project";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export const SingleProject = ({ Project }: { Project: ProjectType | null }) => {
    const cartItem: CartType = {
        id: Project?.id!,
        title: Project?.title!,
        image: Project?.image!,
        categories: Project?.categories!,
        languages: Project?.languages!,
        price: Project?.price!,
    };
    return (
        <>
            <section className="w-full relative">
                <Image
                    src={Project?.image!}
                    width={1920}
                    height={800}
                    alt="Product Hero"
                    className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </section>
            <div className="w-10/12 max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid gap- md:gap-">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="mt-2 flex py-1 gap-2 overflow-hidden">
                                {Project!.categories.map((category, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[0.65rem]"
                                    >
                                        {category}
                                    </span>
                                ))}
                                {Project!.languages.map((language, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[0.65rem]"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                                {Project?.title}
                            </h1>
                            <div className="flex items-center justify-between pt-2">
                                <div className="text-xl font-bold">
                                    ₹{(Project?.price! / 100)}
                                </div>
                                <AddToCartButton project={cartItem!} />
                            </div>
                        </div>
                        <div className="text-xl md:text-2xl font-semibold">
                            Abstract
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-justify">
                            {Project?.content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
