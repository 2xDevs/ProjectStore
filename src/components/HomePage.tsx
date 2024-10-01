"use client";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Code,
    Search,
    ShoppingCart,
    Star,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
    ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";
import { MainCarousel } from "@/components/MainCarousel";
import { cn } from "@/lib/utils";
import { ProjectsType } from "@/types/project";

export default function HomePage({
    CarouselProjects,
}: {
    CarouselProjects: ProjectsType | null;
}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProjects = [
        {
            id: 1,
            title: "AI Chatbot",
            description:
                "A machine learning-based chatbot with natural language processing capabilities.",
            price: 49.99,
            rating: 4.5,
            language: ["Python", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/-rmhqdJlQ6-ndFvD3-e8gw",
        },
        {
            id: 2,
            title: "Blockchain Voting System",
            description:
                "Secure and transparent voting system built on blockchain technology.",
            price: 79.99,
            rating: 4.8,
            language: ["JavaScript", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/YHZ25yOGQ8qW8IrV5tLYiQ",
        },
        {
            id: 3,
            title: "Augmented Reality Navigation",
            description:
                "Mobile app for AR-based indoor navigation and point of interest discovery.",
            price: 59.99,
            rating: 4.2,
            language: ["Swift", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/xQJh_3YNTLuDSYixVfj1tg",
        },
        {
            id: 4,
            title: "Distributed File System",
            description:
                "Scalable and fault-tolerant distributed file system for cloud storage.",
            price: 89.99,
            rating: 4.7,
            language: ["Go", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/xn5qcK6QSkaCp9XD9qk3Xg",
        },
    ];

    const trendingProjects = [
        {
            id: 5,
            title: "Quantum Algorithm Simulator",
            description:
                "Simulate and visualize quantum algorithms on a classical computer.",
            price: 69.99,
            rating: 4.6,
            language: ["Q#", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/0qnMM6VESPyCQSSQLWhOdQ",
        },
        {
            id: 6,
            title: "IoT Smart Home Hub",
            description:
                "Central control system for managing various IoT devices in a smart home.",
            price: 54.99,
            rating: 4.3,
            language: ["C++", "AI", "ML", "NLP"],

            image: "https://ideogram.ai/assets/image/lossless/response/bxYNygdmRV2_YyUXP9oMXw",
        },
        {
            id: 7,
            title: "Genetic Algorithm Optimizer",
            description:
                "Solve complex optimization problems using genetic algorithms.",
            price: 39.99,
            rating: 4.4,
            language: ["Java", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/lkZwsa4DRfSEbNH4lZ65wQ",
        },
        {
            id: 8,
            title: "Neural Style Transfer App",
            description:
                "Apply artistic styles to images using deep learning techniques.",
            price: 44.99,
            rating: 4.1,
            language: ["Python", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/mGl4oc-6QvaFVCtAVJv4Og",
        },
    ];

    const studentProjects = [
        {
            id: 9,
            title: "Data Structures Visualizer",
            description:
                "Interactive tool for visualizing common data structures and algorithms.",
            price: 29.99,
            rating: 4.7,
            language: ["JavaScript", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/-rmhqdJlQ6-ndFvD3-e8gw",
        },
        {
            id: 10,
            title: "Mini Compiler",
            description:
                "A simple compiler implementation for a basic programming language.",
            price: 34.99,
            rating: 4.5,
            language: ["C", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/YHZ25yOGQ8qW8IrV5tLYiQ",
        },
        {
            id: 11,
            title: "Web Scraping Framework",
            description:
                "Modular framework for building efficient web scrapers and crawlers.",
            price: 24.99,
            rating: 4.2,
            language: ["Python", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/xQJh_3YNTLuDSYixVfj1tg",
        },
        {
            id: 12,
            title: "2D Game Engine",
            description:
                "Lightweight 2D game engine for creating simple games and prototypes.",
            price: 39.99,
            rating: 4.6,
            language: ["C++", "AI", "ML", "NLP"],
            image: "https://ideogram.ai/assets/image/lossless/response/xn5qcK6QSkaCp9XD9qk3Xg",
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Software Engineer",
            content:
                "The quality of the code I purchased was exceptional. It saved me weeks of development time!",
            avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
        },
        {
            id: 2,
            name: "Sarah Lee",
            role: "Student",
            content:
                "As a CS student, these projects have been invaluable for learning and improving my skills.",
            avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Startup Founder",
            content:
                "The blockchain project I bought became the foundation of my startup. Highly recommended!",
            avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
        },
    ];

    return (
        <main className="w-screen">
            {/* Hero Section */}
            <section
                id="hero"
                className="py-12 sm:flex sm:min-h-[calc(100dvh-4.6rem)] sm:items-center sm:py-0"
            >
                <div className="mx-auto flex max-w-screen-2xl px-4">
                    <div className="mx-auto w-full sm:w-3/4 md:w-10/12 xl:w-2/5">
                        <h1 className="text-balance py-6 text-center text-4xl font-bold sm:text-5xl md:text-7xl lg:text-balance lg:text-7xl xl:text-start">
                            Elevate Your Coding Projects
                        </h1>
                        <p className="mx-auto mb-12 max-w-[600px] text-center text-sm tracking-tight text-muted-foreground md:text-xl xl:text-start">
                            Access premium computer science project source code.
                            Build your portfolio, learn new technologies, and
                            accelerate your development process.
                        </p>
                        <div className="flex justify-center gap-4 xl:justify-start">
                            <Button>
                                <Link href={"#"}>Get Started</Link>
                            </Button>
                            <Button
                                className="border-2 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                variant="outline"
                            >
                                <Link href={"/projects"}>View Projects</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="hidden flex-1 xl:block">
                        <MainCarousel CarouselProjects={CarouselProjects} />
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section
                id="featured"
                className="bg-accent px-2 py-12 md:py-24 lg:py-32"
            >
                <div className="container mx-auto grid place-content-center place-items-center gap-8 md:px-6">
                    <div className="flex w-full items-center justify-center sm:justify-between">
                        <Link
                            href="/projects"
                            className="group flex items-center text-2xl font-bold sm:hidden"
                        >
                            Featured Projects
                            <span className="ml-1 transition-transform duration-100 group-hover:translate-x-1">
                                <ChevronsRight />
                            </span>
                        </Link>
                        <h2 className="hidden font-bold sm:flex md:text-4xl">
                            Featured Projects
                        </h2>
                        <Link
                            href="/projects"
                            prefetch={true}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "group hidden sm:flex",
                            )}
                        >
                            View All
                            <span className="ml-1 transition-transform duration-100 group-hover:translate-x-1">
                                <ArrowRightIcon className="h-4 w-4" />
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {featuredProjects?.map((ProjectData, index) => (
                            <ProjectCard2 key={index} project={ProjectData} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner 1 */}
            <section className="flex w-screen items-center justify-center py-12 text-white">
                <div className="container px-4 text-center md:px-6">
                    <h2 className="mb-4 text-3xl font-bold">
                        Ready for Your Next Coding Challenge?
                    </h2>
                    <p className="mb-6 text-xl">
                        Explore our wide range of projects and take your skills
                        to the next level.
                    </p>
                    <Button>
                        <Link href={"/projects"}>Browse All Projects</Link>
                    </Button>
                </div>
            </section>

            {/* Trending Projects Section */}
            <section
                id="trending"
                className="bg-accent px-2 py-12 md:py-24 lg:py-32"
            >
                <div className="container mx-auto grid place-content-center place-items-center gap-8 md:px-6">
                    <div className="flex w-full items-center justify-center sm:justify-between">
                        <Link
                            href="/projects"
                            className="group flex items-center text-2xl font-bold sm:hidden"
                        >
                            Trending Projects
                            <span className="ml-1 transition-transform duration-100 group-hover:translate-x-1">
                                <ChevronsRight />
                            </span>
                        </Link>
                        <h2 className="hidden font-bold sm:flex md:text-4xl">
                            Trending Projects
                        </h2>
                        <Link
                            href="/projects"
                            prefetch={true}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "group hidden sm:flex",
                            )}
                        >
                            View All
                            <span className="ml-1 transition-transform duration-100 group-hover:translate-x-1">
                                <ArrowRightIcon className="h-4 w-4" />
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {featuredProjects?.map((ProjectData, index) => (
                            <ProjectCard2 key={index} project={ProjectData} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="flex w-screen items-center justify-center py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                                <Search className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">
                                1. Browse Projects
                            </h3>
                            <p className="text-muted-foreground">
                                Explore our wide range of high-quality CS
                                projects.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                                <ShoppingCart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">
                                2. Purchase
                            </h3>
                            <p className="text-muted-foreground">
                                Buy the projects that fit your needs with secure
                                payment.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500">
                                <Code className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">
                                3. Download & Use
                            </h3>
                            <p className="text-muted-foreground">
                                Get instant access to the source code and
                                documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner 2 */}
            <section className="flex w-screen items-center justify-center bg-accent py-12 text-white">
                <div className="container px-4 text-center md:px-6">
                    <h2 className="mb-4 text-3xl font-bold">
                        Accelerate Your Learning
                    </h2>
                    <p className="mb-6 text-xl">
                        Our projects come with detailed documentation and
                        explanations to boost your understanding.
                    </p>
                    <Button>
                        <Link href={"#"}>Learn More</Link>
                    </Button>
                </div>
            </section>

            {/* Student Projects Section */}
            <section id="trending" className="px-2 py-12 md:py-24 lg:py-32">
                <div className="container mx-auto grid place-content-center place-items-center gap-8 md:px-6">
                    <div className="flex w-full items-center justify-center sm:justify-between">
                        <Link
                            href="/projects"
                            className="group flex items-center text-2xl font-bold sm:hidden"
                        >
                            Student Projects
                            <span className="ml-1 transition-transform duration-100 group-hover:translate-x-1">
                                <ChevronsRight />
                            </span>
                        </Link>
                        <h2 className="hidden font-bold sm:flex md:text-4xl">
                            Student Projects
                        </h2>
                        <Link
                            href="/projects"
                            prefetch={true}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "group hidden sm:flex",
                            )}
                        >
                            View All
                            <span className="ml-1 transition-transform duration-100 group-hover:translate-x-1">
                                <ArrowRightIcon className="h-4 w-4" />
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {studentProjects?.map((ProjectData, index) => (
                            <ProjectCard2 key={index} project={ProjectData} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel Section */}
            <section className="bg-accent py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                        What Our Customers Say
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-full flex-shrink-0 px-4"
                                    >
                                        <div className="mx-auto max-w-2xl text-center">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={80}
                                                height={80}
                                                className="mx-auto mb-4 h-20 w-20 rounded-full"
                                            />
                                            <p className="mb-4 text-xl italic">
                                                "{testimonial.content}"
                                            </p>
                                            <p className="font-bold">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() =>
                                setCurrentSlide((prev) =>
                                    prev === 0
                                        ? testimonials.length - 1
                                        : prev - 1,
                                )
                            }
                            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() =>
                                setCurrentSlide((prev) =>
                                    prev === testimonials.length - 1
                                        ? 0
                                        : prev + 1,
                                )
                            }
                            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="flex w-screen items-center justify-center py-12 text-white md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to Elevate Your Projects?
                        </h2>
                        <p className="mx-auto max-w-[700px] text-xl">
                            Get access to premium computer science projects and
                            take your skills to the next level.
                        </p>
                        <Button asChild>
                            <div>
                                <Link href={"/projects"}>
                                    Start Browsing Now
                                </Link>
                            </div>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

const ProjectCard2 = ({ project }: any) => {
    return (
        <Card
            key={project.id}
            className="relative flex h-full max-w-sm flex-col rounded-lg border bg-card shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl sm:max-w-xs"
        >
            <img
                className="max-h-[240px] w-full rounded-lg rounded-bl-none rounded-br-none object-cover object-center sm:max-h-[200px]"
                src={project.image}
                alt={project.title}
            />
            <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="line-clamp-2 text-muted-foreground">
                    {project.description}
                </p>
                <div className="mt-4 flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-sm">
                        {project.rating.toFixed(1)}
                    </span>
                </div>
                <div className="mt-2 space-x-2 overflow-hidden">
                    {project.language.map((language: any) => (
                        <span className="rounded-md bg-muted px-2 py-1 text-[0.65rem] text-muted-foreground">
                            {language}
                        </span>
                    ))}
                    {project.language.map((language: any) => (
                        <span className="rounded-md bg-muted px-2 py-1 text-[0.65rem] text-muted-foreground">
                            {language}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                    ₹{project.price.toFixed(2)}
                </span>
                <Button>View Project</Button>
            </CardFooter>
        </Card>
    );
};
