"use client";

import { CheckoutButton } from "@/components/CheckOut";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { CartType } from "@/types/project";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Cartsheet = () => {
    const { items, removeItem } = useCart();

    const subtotal = items.reduce(
        (total, { project }) => total + project.price!,
        0,
    );

    const discount = items.length > 0 ? 1000 : 0;
    const total = subtotal - discount;
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={"icon"} variant={"ghost"}>
                        <Icons.emptyCart className="h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="sr-only">Toggle Cart Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent
                    className="flex h-full w-full flex-col sm:max-w-sm"
                    side="right"
                >
                    <ScrollArea className="mt-6 flex-1">
                        {items.length == 0 ? (
                            <div className="flex flex-col items-center gap-8">
                                <Icons.emptyCart className="mr-8" />
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-xl font-bold leading-none">
                                        Your cart is empty
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Whoops! Nothing to show here yet.
                                    </p>
                                    <div className="text-center">
                                        <p>Looking for Projects??</p>

                                        <Link
                                            className={cn(
                                                buttonVariants({
                                                    variant: "link",
                                                }),
                                                "text-base",
                                            )}
                                            href={"/projects"}
                                        >
                                            Projects
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((cartItem, index) => (
                                    <CartSheetItems
                                        key={index}
                                        removeItem={removeItem}
                                        project={cartItem.project!}
                                    />
                                ))}
                            </div>
                        )}
                    </ScrollArea>
                    {items.length > 0 && (
                        <div className="">
                            <h2 className="mb-4 text-xl font-bold">
                                Cart Summary
                            </h2>
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
                            <div className="mt-4 flex gap-4">
                                <SheetClose asChild>
                                    <Link
                                        className={cn(
                                            buttonVariants(),
                                            "flex-1",
                                        )}
                                        href={"/cart"}
                                    >
                                        View cart
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <CheckoutButton
                                        className="flex-1"
                                        amount={total}
                                    />
                                </SheetClose>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </>
    );
};

const CartSheetItems = ({
    removeItem,
    project,
}: {
    removeItem: (projectId: number) => void;
    project: CartType;
}) => {
    return (
        <>
            <div className="flex gap-4">
                <div className="rounded-md border border-primary">
                    <Image
                        width={100}
                        height={100}
                        src={project.image}
                        alt={project.title}
                        className="aspect-[16/10] h-16 w-fit rounded-md"
                    />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                    <h3 className="line-clamp-1 text-lg font-bold">
                        {project.title}
                    </h3>
                    <div className="flex items-end justify-between">
                        <div>
                            <p>₹{project.price! / 100}</p>
                        </div>
                        <Button
                            className="flex h-fit items-center gap-1 px-3 py-1.5 text-sm"
                            variant={"destructiveOutline"}
                            onClick={() => removeItem(project.id)}
                        >
                            <Trash2Icon className="mb-px h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
