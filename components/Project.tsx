"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProjectType } from "@/types/project";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Project = ({ ProjectData }: { ProjectData: ProjectType }) => {
    const pathname = usePathname()
    const [cartItems, setCartItems] = useState<{ items: any[] }>({ items: [] });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedItems = localStorage.getItem("cartItems");
            if (storedItems) {
                setCartItems(JSON.parse(storedItems));
            } else {
                const initialItems = { items: [] };
                localStorage.setItem("cartItems", JSON.stringify(initialItems));
                setCartItems(initialItems);
            }
        }
    }, []);

    const isInCart = cartItems.items.some(item => item.id === ProjectData.id);

    function handleAddToCart() {
        if (!isInCart) {
            const updatedItems = [...cartItems.items, {
                id: ProjectData.id,
                image: ProjectData.image,
                title: ProjectData.title,
                price: ProjectData.price,
            }];
            const newCart = { items: updatedItems };
            localStorage.setItem("cartItems", JSON.stringify(newCart));
            setCartItems(newCart);
        }
    }

    function handleRemoveFromCart() {
        const updatedItems = cartItems.items.filter(
            (item) => item.id !== ProjectData.id
        );
        const newCart = { items: updatedItems };
        localStorage.setItem("cartItems", JSON.stringify(newCart));
        setCartItems(newCart);
    }

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
                <div className="flex justify-between items-center mt-4">
                    <h4 className="font-semibold text-lg md:text-xl">
                        {ProjectData.price}
                    </h4>
                    {pathname === "/" || pathname === "/projects" ? <> <Button
                                onClick={handleRemoveFromCart}
                            >
                                View Project
                            </Button></> : (ProjectData.price ? (
                        isInCart ? (
                            <Button
                                className="z-20 bg-destructive"
                                onClick={handleRemoveFromCart}
                            >
                                Remove from cart
                            </Button>
                        ) : (
                            <Button
                                className="z-20"
                                onClick={handleAddToCart}
                            >
                                Add to cart
                            </Button>
                        )
                    ) : (
                        <Button className="z-20 w-full">Download</Button>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};
