import { Flex } from "@radix-ui/themes";
import React from "react";
import CartItem from "./CartItem";
import { CartItem as CartItemType } from "@prisma/client";

interface CartListProps {
  cartItems: CartItemType[];
}

const CartList: React.FC<CartListProps> = ({ cartItems }) => {
  return (
    <Flex direction="column" className="bg-white">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default CartList;
