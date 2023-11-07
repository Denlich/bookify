import React from "react";
import prisma from "../../../../prisma/client";
import { Grid, Text } from "@radix-ui/themes";
import CartItem from "./CartItem";

interface ItemsProps {
  userId: string;
}

const Items: React.FC<ItemsProps> = async ({ userId }) => {
  const cart = await prisma.cart.findUnique({
    where: {
      userId,
    },
    include: {
      items: true,
    },
  });

  if (cart === null)
    await prisma.cart.create({
      data: {
        userId,
      },
    });

  if (cart?.items.length === 0) return <Text size="3">The cart is empty</Text>;

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      p="3"
      className="bg-white"
    >
      {cart!.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default Items;
