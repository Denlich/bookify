import { CartItem } from "@prisma/client";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import prisma from "../../../../prisma/client";
import Link from "next/link";
import Quantity from "./Quantity";

interface CartItemProps {
  item: CartItem;
}

const CartItem: React.FC<CartItemProps> = async ({ item }) => {
  const book = await prisma.book.findUnique({
    where: { id: item.bookId },
    include: { author: true },
  });

  return (
    <Flex className="bg-white" gap="5">
      <Box className="w-64 h-64 bg-gray-200 rounded-xl">
        {book!.image && (
          <Image src={book!.image} alt={book!.title} width={450} height={450} />
        )}
      </Box>

      <Flex direction="column" justify="between">
        <Flex direction="column" gap="1">
          <Text size="5" weight="bold">
            <Link href={`/book/${book!.id}`}>{book!.title}</Link>
          </Text>
          <Text size="3" color="gray">
            <Link href={`/author/${book!.authorId}`}>
              {book!.author.name} {book!.author.surname}
            </Link>
          </Text>
        </Flex>
        <Flex direction="column" gap="3">
          <Text size="5" weight="bold">
            ${book!.cost}
          </Text>
          <Quantity quantity={item.quantity} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
