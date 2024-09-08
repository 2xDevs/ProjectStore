"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { CartType } from "@/types/project";
import { ShoppingCart, Trash2Icon } from "lucide-react";

const AddToCartButton = ({ project }: { project: CartType }) => {
  const { items, addItem, removeItem } = useCart();
  const [isExists, setIsExists] = useState<boolean>();

  useEffect(() => {
    if (items.find((item) => item.project.id === project.id)) setIsExists(true);
    else setIsExists(false);
  }, [project, items]);

  return isExists ? (
    <Button
      onClick={() => {
        removeItem(project.id);
      }}
      variant={"destructive"}
      className="w-full"
    >
      <Trash2Icon className="mr-2 h-4 w-4" /> Remove
    </Button>
  ) : (
    <Button
      onClick={() => {
        addItem(project);
      }}
      className="w-full"
    >
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  );
};

export default AddToCartButton;
