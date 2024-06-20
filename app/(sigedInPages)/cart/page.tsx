"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { Icons } from "@/components/Icons";
import Image from "next/image";

export default function CartComponent() {
    const { items, removeItem } = useCart();

    const subtotal = items.reduce(
        (total, { project }) => total + project.price!,
        0
    );

    const discount = items.length > 0 ? 10 : 0;
    const total = subtotal - discount;

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                    {items.length <= 0 ? (
                        <div className="h-auto my-auto flex flex-col justify-center items-center">
                            <Icons.emptyCart  />
                            <h3 className="mt-5 font-semibold text-2xl">
                                Your cart is empty
                            </h3>
                            <p className="text-muted-foreground text-center">
                                Whoops! Nothing to show here yet.
                            </p>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map(({ project }) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="py-4 px-2">
                                    <h3 className="text-lg font-semibold">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="font-semibold">
                                            ₹{project.price!}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-fit text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                                            onClick={() =>
                                                removeItem(project.id)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Discount</span>
                            <span>-₹{discount.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between font-bold">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                    </div>
                    <Button size="lg" className="w-full mt-6">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}
