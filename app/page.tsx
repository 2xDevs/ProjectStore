import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { plugin } from "postcss";
import React from "react";

export default function Home() {

  return (
    <main className="flex-1">
      <section className="w-full h-screen flex justify-center items-center">
        <Carousel className="w-full max-w-lg">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-video h-full w-full justify-center p-2">
                  <Image src="https://picsum.photos/200" fill className="h-full w-full rounded-lg" alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section id="latest" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Creative Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the latest and most innovative creative projects from our talented community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Modern Illustration</h3>
                <p className="text-sm text-gray-500">Captivating digital artwork</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$29.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Minimalist Poster</h3>
                <p className="text-sm text-gray-500">Elegant and visually striking</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$19.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Abstract Painting</h3>
                <p className="text-sm text-gray-500">Unique and thought-provoking</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$39.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 4"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Typographic Design</h3>
                <p className="text-sm text-gray-500">Expressive and impactful</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$24.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="popular" className="w-full py-12 md:py-24 lg:py-32 bg-gray-500 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Creative Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore the most popular and sought-after creative projects from our talented community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 5"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">3D Character Design</h3>
                <p className="text-sm text-gray-500">Captivating and lifelike</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$49.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 6"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Retro Branding</h3>
                <p className="text-sm text-gray-500">Nostalgic and timeless</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$34.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 7"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Geometric Patterns</h3>
                <p className="text-sm text-gray-500">Visually striking and modern</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$29.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
              <Image
                src={"https://picsum.photos/200"}
                alt="Project 8"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Minimalist Illustration</h3>
                <p className="text-sm text-gray-500">Elegant and visually striking</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg md:text-xl">$39.99</h4>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="featured" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Creative Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our hand-picked selection of the most impressive and captivating creative projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MountainIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PlusIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
function Autoplay(arg0: { delay: number; stopOnInteraction: boolean; }): any {
  throw new Error("Function not implemented.");
}

