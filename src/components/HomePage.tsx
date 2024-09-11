"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProjects = [
        {
            id: 1,
            title: "AI Chatbot",
            description:
                "A machine learning-based chatbot with natural language processing capabilities.",
            price: 49.99,
            rating: 4.5,
            language: "Python",
            image: "https://ideogram.ai/assets/image/lossless/response/-rmhqdJlQ6-ndFvD3-e8gw",
        },
        {
            id: 2,
            title: "Blockchain Voting System",
            description:
                "Secure and transparent voting system built on blockchain technology.",
            price: 79.99,
            rating: 4.8,
            language: "JavaScript",
            image: "https://ideogram.ai/assets/image/lossless/response/YHZ25yOGQ8qW8IrV5tLYiQ",
        },
        {
            id: 3,
            title: "Augmented Reality Navigation",
            description:
                "Mobile app for AR-based indoor navigation and point of interest discovery.",
            price: 59.99,
            rating: 4.2,
            language: "Swift",
            image: "https://ideogram.ai/assets/image/lossless/response/xQJh_3YNTLuDSYixVfj1tg",
        },
        {
            id: 4,
            title: "Distributed File System",
            description:
                "Scalable and fault-tolerant distributed file system for cloud storage.",
            price: 89.99,
            rating: 4.7,
            language: "Go",
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
            language: "Q#",
            image: "https://ideogram.ai/assets/image/lossless/response/0qnMM6VESPyCQSSQLWhOdQ",
        },
        {
            id: 6,
            title: "IoT Smart Home Hub",
            description:
                "Central control system for managing various IoT devices in a smart home.",
            price: 54.99,
            rating: 4.3,
            language: "C++",
            image: "https://ideogram.ai/assets/image/lossless/response/bxYNygdmRV2_YyUXP9oMXw",
        },
        {
            id: 7,
            title: "Genetic Algorithm Optimizer",
            description:
                "Solve complex optimization problems using genetic algorithms.",
            price: 39.99,
            rating: 4.4,
            language: "Java",
            image: "https://ideogram.ai/assets/image/lossless/response/lkZwsa4DRfSEbNH4lZ65wQ",
        },
        {
            id: 8,
            title: "Neural Style Transfer App",
            description:
                "Apply artistic styles to images using deep learning techniques.",
            price: 44.99,
            rating: 4.1,
            language: "Python",
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
            language: "JavaScript",
            image: "https://ideogram.ai/assets/image/lossless/response/-rmhqdJlQ6-ndFvD3-e8gw",
        },
        {
            id: 10,
            title: "Mini Compiler",
            description:
                "A simple compiler implementation for a basic programming language.",
            price: 34.99,
            rating: 4.5,
            language: "C",
            image: "https://ideogram.ai/assets/image/lossless/response/YHZ25yOGQ8qW8IrV5tLYiQ",
        },
        {
            id: 11,
            title: "Web Scraping Framework",
            description:
                "Modular framework for building efficient web scrapers and crawlers.",
            price: 24.99,
            rating: 4.2,
            language: "Python",
            image: "https://ideogram.ai/assets/image/lossless/response/xQJh_3YNTLuDSYixVfj1tg",
        },
        {
            id: 12,
            title: "2D Game Engine",
            description:
                "Lightweight 2D game engine for creating simple games and prototypes.",
            price: 39.99,
            rating: 4.6,
            language: "C++",
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
            <section className="flex min-h-screen w-full items-center justify-center bg-secondary py-12 text-white md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h1 className="max-w-xl text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Elevate Your Coding Projects
                            </h1>
                            <p className="max-w-[600px] text-gray-200 md:text-xl">
                                Access premium computer science project source
                                code. Build your portfolio, learn new
                                technologies, and accelerate your development
                                process.
                            </p>
                            <div className="space-y-4 sm:space-x-4 sm:space-y-0">
                                <Button className="bg-white text-purple-700 hover:bg-gray-100">
                                    <Link href={"#"}>Get Started</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white bg-transparent text-white hover:bg-white hover:text-purple-700"
                                >
                                    <Link href={"/projects"}>
                                        View Projects
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="https://ideogram.ai/assets/image/lossless/response/cNSZoG_1SAi0Y6JHFMWPyw"
                                alt="Coding Projects"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="ite flex w-screen justify-center bg-background py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="flex h-full flex-col"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                />
                                <CardHeader>
                                    <CardTitle className="line-clamp-1">
                                        {project.title}
                                    </CardTitle>
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
                                    <div className="mt-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                        {project.language}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between">
                                    <span className="text-2xl font-bold">
                                        ₹{project.price.toFixed(2)}
                                    </span>
                                    <Button className="bg-green-500 hover:bg-green-600">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner 1 */}
            <section className="flex w-screen items-center justify-center bg-secondary py-12 text-white">
                <div className="container px-4 text-center md:px-6">
                    <h2 className="mb-4 text-3xl font-bold">
                        Ready for Your Next Coding Challenge?
                    </h2>
                    <p className="mb-6 text-xl">
                        Explore our wide range of projects and take your skills
                        to the next level.
                    </p>
                    <Button className="bg-white text-blue-500 hover:bg-gray-100">
                        <Link href={"/projects"}>Browse All Projects</Link>
                    </Button>
                </div>
            </section>

            {/* Trending Projects Section */}
            <section className="flex w-screen items-center justify-center bg-background py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                        Trending Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {trendingProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="flex h-full flex-col"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                />
                                <CardHeader>
                                    <CardTitle className="line-clamp-1">
                                        {project.title}
                                    </CardTitle>
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
                                    <div className="mt-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                        {project.language}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between">
                                    <span className="text-2xl font-bold">
                                        ₹{project.price.toFixed(2)}
                                    </span>
                                    <Button className="bg-green-500 hover:bg-green-600">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="flex w-screen items-center justify-center bg-secondary py-12 md:py-24">
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
            <section className="flex w-screen items-center justify-center bg-secondary py-12 text-white">
                <div className="container px-4 text-center md:px-6">
                    <h2 className="mb-4 text-3xl font-bold">
                        Accelerate Your Learning
                    </h2>
                    <p className="mb-6 text-xl">
                        Our projects come with detailed documentation and
                        explanations to boost your understanding.
                    </p>
                    <Button className="bg-white text-pink-500 hover:bg-gray-100">
                        <Link href={"#"}>Learn More</Link>
                    </Button>
                </div>
            </section>

            {/* Student Projects Section */}
            <section className="flex w-screen items-center justify-center bg-background py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                        Student Favorites
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {studentProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="flex h-full flex-col"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                />
                                <CardHeader>
                                    <CardTitle className="line-clamp-1">
                                        {project.title}
                                    </CardTitle>
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
                                    <div className="mt-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                        {project.language}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between">
                                    <span className="text-2xl font-bold">
                                        ₹{project.price.toFixed(2)}
                                    </span>
                                    <Button className="bg-green-500 hover:bg-green-600">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel Section */}
            <section className="flex w-screen items-center justify-center bg-secondary md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                        What Our Customers Say
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-₹{currentSlide * 100}%)`,
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
            <section className="flex w-screen items-center justify-center bg-secondary py-12 text-white md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to Elevate Your Projects?
                        </h2>
                        <p className="mx-auto max-w-[700px] text-xl">
                            Get access to premium computer science projects and
                            take your skills to the next level.
                        </p>
                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                            <Link href={"/projects"}>Start Browsing Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
