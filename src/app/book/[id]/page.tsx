import React from "react";
import prisma from "../../../../prisma/client";
import { notFound } from "next/navigation";
import { Flex, Grid, Text, Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

const BookPage = async ({ params }: { params: { id: string } }) => {
  const book = await prisma.book.findUnique({ where: { id: params.id } });
  const author = await prisma.author.findUnique({
    where: { id: book?.authorId },
  });
  const publisher = await prisma.publisher.findUnique({
    where: { id: book?.publisherId },
  });

  if (!book) notFound();

  return (
    <Grid
      columns={{ initial: "1", md: "6" }}
      className="bg-white p-3 rounded-xl"
      align="start"
      gap="2"
    >
      <Flex direction="column" className="col-span-2">
        <Box className="w-72 h-96 bg-gray-200 rounded-lg">
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
      <Text className="col-span-3 text-start">{book.description}</Text>
      <Flex direction="column" gap="2">
        <Text className="font-bold text-xl text-start">${book.cost}</Text>
        <Button className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition">
          Add to cart
        </Button>
      </Flex>
    </Grid>
  );
};

export default BookPage;
