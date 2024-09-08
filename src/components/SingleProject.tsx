import { CartType, ProjectType } from "@/types/project";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export const SingleProject = ({ Project }: { Project: ProjectType | null }) => {
  const cartItem: CartType = {
    id: Project?.id!,
    title: Project?.title!,
    image: Project?.image!,
    price: Project?.price!,
  };
  return (
    <>
      <section className="relative mx-auto max-w-screen-2xl">
        <Image
          src={Project?.image!}
          width={1920}
          height={800}
          alt="Product Hero"
          className="aspect-[16/9] h-[500px] object-cover object-center md:h-[600px] lg:h-[600px]"
        />
        <div className="absolute bottom-0 w-full p-4 backdrop-brightness-50">
          <h1 className="z-50 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {Project?.title}
          </h1>
          <div className="mt-2 flex gap-2 overflow-hidden py-1">
            {Project!.categories.map((category, index) => (
              <span
                key={index}
                className="rounded-md bg-muted px-2 py-1 text-[0.65rem] text-muted-foreground"
              >
                {category}
              </span>
            ))}
            {Project!.languages.map((language, index) => (
              <span
                key={index}
                className="rounded-md bg-muted px-2 py-1 text-[0.65rem] text-muted-foreground"
              >
                {language}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="text-2xl font-bold text-white">
              ₹{Project?.price! / 100}
            </div>
            {/* <AddToCartButton project={cartItem!} /> */}
          </div>
        </div>
      </section>
      <div className="mx-auto w-10/12 max-w-6xl px-4 md:px-6">
        <div className="gap- md:gap- grid">
          <div className="space-y-6">
            <div className="space-y-2"></div>
            <div className="text-xl font-semibold md:text-2xl">Abstract</div>
            <div className="text-justify text-gray-500 dark:text-gray-400">
              {Project?.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
