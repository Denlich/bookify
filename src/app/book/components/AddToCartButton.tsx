"use client";

import useCartStore from "@/stores/cart-store";
import { IconButton } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface AddToCartButtonProps {
  bookId: string;
  isInCart: boolean;
  cartId: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  bookId,
  isInCart,
  cartId,
}) => {
  const router = useRouter();
  const addCartItem = useCartStore((state) => state.addCartItem);
  const handleAddToCart = async () => {
    await axios.post("/api/cart/cartItem", { bookId, quantity: 1 });
    addCartItem({ id: bookId + 1, bookId, quantity: 1, cartId });
    router.refresh();
  };
  const cart = useCartStore((state) => state.cartItems);

  const storeCheck = cart.some((item) => item.bookId === bookId);

  return (
    <IconButton
      color="cyan"
      className="w-full gap-3 hover:cursor-pointer"
      onClick={handleAddToCart}
      disabled={isInCart || storeCheck}
    >
      Add to cart
      <AiOutlineShoppingCart width="24" height="24" />
    </IconButton>
  );
};

export default AddToCartButton;
