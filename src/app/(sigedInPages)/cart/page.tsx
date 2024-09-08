"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { Icons } from "@/components/Icons";
import Image from "next/image";
import { CheckoutButton } from "@/components/CheckOut";

export default function CartComponent() {
    const { items, removeItem } = useCart();

    const subtotal = items.reduce(
        (total, { project }) => total + project.price!,
        0,
    );

    const discount = items.length > 0 ? 1000 : 0;
    const total = subtotal - discount;

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                <div className={`${items.length > 0 ? "" : "col-span-2"}`}>
                    <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
                    {items.length <= 0 ? (
                        <div className="my-auto flex h-auto flex-col items-center justify-center">
                            <Icons.emptyCart />
                            <h3 className="mt-5 text-2xl font-semibold">
                                Your cart is empty
                            </h3>
                            <p className="text-center text-muted-foreground">
                                Whoops! Nothing to show here yet.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {items.map(({ project }) => (
                                <div
                                    key={project.id}
                                    className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="h-60 w-full object-cover"
                                    />
                                    <div className="px-2 py-4">
                                        <h3 className="text-lg font-semibold">
                                            {project.title}
                                        </h3>
                                        <div className="mt-2 flex items-center justify-between">
                                            <div className="font-semibold">
                                                ₹{project.price! / 100}
                                            </div>
                                            <Button
                                                variant="destructiveOutline"
                                                size="sm"
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
                    )}
                </div>
                {items.length > 0 && (
                    <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                        <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>₹{(subtotal / 100).toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Discount</span>
                                <span>-₹{(discount / 100).toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between font-bold">
                                <span>Total</span>
                                <span>₹{(total / 100).toFixed(2)}</span>
                            </div>
                        </div>
                        <CheckoutButton
                            size={"lg"}
                            className="mt-6 w-full"
                            amount={total}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
