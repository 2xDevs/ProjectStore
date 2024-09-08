import { CartType } from "@/types/project";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
    project: CartType;
};

type CartState = {
    items: CartItem[];
    addItem: (project: CartType) => void;
    removeItem: (projectId: number) => void;
    clearCart: () => void;
};

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (project) => {
                set((state) => {
                    // Check if the project already exists in the cart
                    const projectExists = state.items.some(
                        (item) => item.project.id === project.id
                    );

                    if (!projectExists) {
                        return { items: [...state.items, { project }] };
                    }

                    // Return the current state if the project already exists
                    return state;
                });
            },
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter(
                        (item) => Number(item.project.id) !== id
                    ),
                })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
