import { CartItem } from "@prisma/client";
import { create } from "zustand";

interface CartState {
  cartItems: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addCartItem: (cartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, cartItem],
    })),
}));

export default useCartStore;
