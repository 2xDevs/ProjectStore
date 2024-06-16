export type CartItem = {
    id: number;
    image: string;
    title: string;
    price?: number | null;
};

export type CartItems = CartItem[]