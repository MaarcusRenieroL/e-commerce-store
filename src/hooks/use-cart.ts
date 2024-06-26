import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "~/lib/types";
import { toast } from "sonner";

type CartStore = {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.productId === data.productId,
        );

        if (existingItem) {
          return toast("Error", {
            description: "Item already exists",
          });
        }

        set({ items: [...get().items, data] });
        toast("Success", {
          description: "Item addded to cart",
        });
      },
      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item) => item.productId !== id)],
        });
        toast("Success", {
          description: "Item removed from cart",
        });
      },
      removeAll: () => {
        set({ items: [] });
        toast("Success", {
          description: "Cart cleared",
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
