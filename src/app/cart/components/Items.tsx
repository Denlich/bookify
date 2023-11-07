import React from "react";
import prisma from "../../../../prisma/client";
import { Text } from "@radix-ui/themes";
import CartList from "./CartList";

interface ItemsProps {
  userId: string;
}

const Items: React.FC<ItemsProps> = async ({ userId }) => {
  const cart = await prisma.cart.findUnique({
    where: {
      userId,
    },
    include: {
      items: {
        include: {
          book: true,
        },
      },
    },
  });

  if (cart === null)
    await prisma.cart.create({
      data: {
        userId,
      },
    });

  if (cart?.items.length === 0) return <Text size="3">The cart is empty</Text>;

  return <CartList cartItems={cart?.items!} />;
};

export const dynamic = "force-dynamic";

export default Items;
