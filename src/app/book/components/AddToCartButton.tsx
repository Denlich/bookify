"use client";

import { IconButton } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface AddToCartButtonProps {
  bookId: string;
  isInCart: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  bookId,
  isInCart,
}) => {
  const handleAddToCart = async () => {
    await axios.post("/api/cart/cartItem", { bookId, quantity: 1 });
  };

  return (
    <IconButton
      color="cyan"
      className="w-full gap-3 hover:cursor-pointer"
      onClick={handleAddToCart}
      disabled={isInCart}
    >
      Add to cart
      <AiOutlineShoppingCart width="24" height="24" />
    </IconButton>
  );
};

export default AddToCartButton;
