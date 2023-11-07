import { CartItem } from "@prisma/client";
import { create } from "zustand";

interface CartState {
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
  addCartItem: (cartItem: CartItem) => void;
  updateCartItemQuantity: (quantity: number, cartItemId: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  setCartItems: (cartItems) => set({ cartItems }),
  addCartItem: (cartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, cartItem],
    })),
  updateCartItemQuantity: (quantity, cartItemId) =>
    set((state) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === cartItemId
      );

      const updatedCartItems = [...state.cartItems];

      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity,
      };

      return { cartItems: updatedCartItems };
    }),
}));

export default useCartStore;
