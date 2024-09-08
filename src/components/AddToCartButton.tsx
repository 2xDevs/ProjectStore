"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { CartType } from "@/types/project";


const AddToCartButton = ({ project }: { project: CartType }) => {
    const { addItem } = useCart();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [isSuccess]);

    return (
        <Button
            onClick={() => {
                addItem(project);
                setIsSuccess(true);
            }}
            className="w-2/4 sm:w-1/4"
        >
            {isSuccess ? "Added!" : "Add to cart"}
        </Button>
    );
};

export default AddToCartButton;
