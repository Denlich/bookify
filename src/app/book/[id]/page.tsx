import React from "react";
import prisma from "../../../../prisma/client";
import { notFound } from "next/navigation";
import { Flex, Grid, Text, Box, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import authOptions from "@/auth/authOptions";
import { getServerSession } from "next-auth";

const BookPage = async ({ params }: { params: { id: string } }) => {
  const book = await prisma.book.findUnique({ where: { id: params.id } });
  const author = await prisma.author.findUnique({
    where: { id: book?.authorId },
  });
  const publisher = await prisma.publisher.findUnique({
    where: { id: book?.publisherId },
  });
  const session = await getServerSession(authOptions);
  const cart = await prisma.cart.findUnique({
    where: { userId: session?.user.id },
    include: { items: true },
  });

  const isInCart = cart?.items.some((item) => item.bookId === book?.id);

  if (!book) notFound();

  return (
    <Grid
      columns={{ initial: "1", md: "6" }}
      className="bg-white p-3 rounded-xl"
      align="start"
      gap="2"
    >
      <Flex direction="column" className="md:col-span-2">
        <Box className="w-full h-96 bg-gray-200 rounded-lg md:w-72">
          {book.image && (
            <Image src={book.image} alt={book.title} layout="fill" />
          )}
        </Box>
        <Text className="text-xl">{book.title}</Text>
        <Text className="text-gray-500">
          <Link href={`/author/${author?.id}`}>
            Author: {author?.name} {author?.surname}
          </Link>
        </Text>
        <Text className="text-gray-500">
          <Link href={`/publisher/${publisher?.id}`}>
            Publisher: {publisher?.name}
          </Link>
        </Text>
      </Flex>
      <Text className="md:col-span-3 text-start">{book.description}</Text>
      <Flex direction="column" gap="2">
        <Text className="font-bold text-xl text-start">${book.cost}</Text>
        <IconButton
          className="w-full hover:cursor-pointer gap-3"
          color="cyan"
          disabled={isInCart}
        >
          Add to cart
          <AiOutlineShoppingCart width="24" height="24" />
        </IconButton>
      </Flex>
    </Grid>
  );
};

export default BookPage;
