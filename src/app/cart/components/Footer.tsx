"use client";

import useCartStore from "@/stores/cart-store";
import { Book, CartItem } from "@prisma/client";
import { Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

interface FooterProps {
  cartItems: ({ book: Book } & CartItem)[];
}

const Footer: React.FC<FooterProps> = ({ cartItems }) => {
  const cartList = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartItems(cartItems);
  }, [cartItems, setCartItems]);

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, cartItem) => {
        return (
          acc +
          cartItem.book.cost *
            cartList.find((item) => item.bookId === cartItem.book.id)?.quantity!
        );
      }, 0)
    );
  }, [cartItems, cartList]);

  return (
    <Flex
      mt="5"
      pt="3"
      justify="between"
      align="center"
      className="border-t-2 border-dashed border-gray-300"
    >
      <Text size="5">Total</Text>${total}
    </Flex>
  );
};

export default Footer;
