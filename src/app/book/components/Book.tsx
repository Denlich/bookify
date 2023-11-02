import { Book } from "@prisma/client";
import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { AiOutlineShoppingCart } from "react-icons/ai";
import prisma from "../../../../prisma/client";
import Container from "./Container";

interface BookProps {
  book: Book;
  authorId?: string;
}

const Book = async ({ book, authorId }: BookProps) => {
  const author = await prisma.author.findUnique({ where: { id: authorId } });

  return (
    <Container bookId={book.id}>
      <Box className="w-full h-64 bg-gray-200 rounded-xl" />
      <Flex direction="column">
        <Text className="text-lg font-semibold">{book.title}</Text>
        <Text className="text-sm">
          {author?.name} {author?.surname}
        </Text>
        <Text className="text-cya-500">${book.cost}</Text>
      </Flex>
      <IconButton color="cyan" className="w-full gap-3">
        Add to cart
        <AiOutlineShoppingCart width="24" height="24" />
      </IconButton>
    </Container>
  );
};

export default Book;
