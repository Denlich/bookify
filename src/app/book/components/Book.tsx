import { Author, Book } from "@prisma/client";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface BookProps {
  book: Book;
  authors: Pick<Author, "name" | "surname" | "id">[];
}

const Book = ({ book, authors }: BookProps) => {
  return (
    <Flex
      direction="column"
      className="bg-white rounded-xl p-3 hover:cursor-pointer hover:bg-gray-50"
      gap="3"
    >
      <Box className="w-full h-64 bg-gray-200 rounded-xl" />
      <Flex direction="column">
        <Text className="text-lg font-semibold">{book.title}</Text>
        <Flex direction="column" className="space-y-1">
          {authors.map((author) => (
            <Text className="text-sm" key={author.id}>
              {author.name} {author.surname}
            </Text>
          ))}
        </Flex>
        <Text className="text-cya-500">${book.cost}</Text>
      </Flex>
      <IconButton color="cyan" className="w-full gap-3">
        Add to cart
        <AiOutlineShoppingCart width="24" height="24" />
      </IconButton>
    </Flex>
  );
};

export default Book;
