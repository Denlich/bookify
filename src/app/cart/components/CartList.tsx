import { Flex } from "@radix-ui/themes";
import React from "react";
import CartItem from "./CartItem";
import { Book, CartItem as CartItemType } from "@prisma/client";
import Footer from "./Footer";

interface CartListProps {
  cartItems: ({ book: Book } & CartItemType)[];
}

const CartList: React.FC<CartListProps> = ({ cartItems }) => {
  return (
    <Flex direction="column" className="bg-white" gap="3">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Footer cartItems={cartItems} />
    </Flex>
  );
};

export default CartList;
