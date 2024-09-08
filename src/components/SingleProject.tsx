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
            <section className="max-w-screen-2xl relative mx-auto">
                <Image
                    src={Project?.image!}
                    width={1920}
                    height={800}
                    alt="Product Hero"
                    className="aspect-[16/9] h-[500px] md:h-[600px] lg:h-[600px] object-cover object-center"
                />
                <div className="absolute bottom-0 w-full p-4 backdrop-brightness-50">
                    <h1 className="text-3xl font-bold text-white z-50 tracking-tight md:text-4xl">
                        {Project?.title}
                    </h1>
                    <div className="mt-2 flex py-1 gap-2 overflow-hidden">
                        {Project!.categories.map((category, index) => (
                            <span
                                key={index}
                                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-[0.65rem]"
                            >
                                {category}
                            </span>
                        ))}
                        {Project!.languages.map((language, index) => (
                            <span
                                key={index}
                                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-[0.65rem]"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <div className="text-2xl text-white font-bold">
                            ₹{Project?.price! / 100}
                        </div>
                        <AddToCartButton project={cartItem!} />
                    </div>
                </div>
            </section>
            <div className="w-10/12 max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid gap- md:gap-">
                    <div className="space-y-6">
                        <div className="space-y-2"></div>
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
