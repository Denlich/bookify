import { CartItem } from "@prisma/client";
import React from "react";

interface CartItemProps {
  item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return <div>CartItem</div>;
};

export default CartItem;
