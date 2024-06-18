import { CartType } from "@/types/project";
import { create } from "zustand";
import { StorageValue, createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
    project: CartType;
};

type CartState = {
    items: CartItem[];
    addItem: (project: CartType) => void;
    removeItem: (projectId: number) => void;
    clearCart: () => void;
};

const selectFieldsToPersist = (state: CartState) => ({
    items: state.items.map((item) => ({
        project: {
            id: item.project.id,
            title: item.project.title,
            image: item.project.image,
            categories: item.project.categories,
            languages: item.project.languages,
            price: item.project.price
        },
    })),
});

const serialize = (state: StorageValue<CartState>) =>
    JSON.stringify({
        ...state,
        state: selectFieldsToPersist(state.state),
    });

const deserialize = (str: string) => JSON.parse(str);

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (project) => {
                set((state) => {
                    const projectExists = state.items.some(
                        (item) => item.project.id === project.id
                    );

                    if (!projectExists) {
                        return { items: [...state.items, { project }] };
                    }

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
            serialize,
            deserialize,
        }
    )
);
