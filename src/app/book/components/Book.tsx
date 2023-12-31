import { Book } from "@prisma/client";
import { Box, Flex, Text } from "@radix-ui/themes";
import prisma from "../../../../prisma/client";
import AddToCartButton from "./AddToCartButton";
import Info from "./Info";
import { getServerSession } from "next-auth";
import authOptions from "@/auth/authOptions";
import Image from "next/image";

interface BookProps {
  book: Book;
  authorId?: string;
}

const Book = async ({ book, authorId }: BookProps) => {
  const author = await prisma.author.findUnique({ where: { id: authorId } });
  const session = await getServerSession(authOptions);
  const cart = session?.user.id
    ? await prisma.cart.findUnique({
        where: { userId: session?.user.id },
        include: { items: true },
      })
    : null;

  if (!cart && session)
    prisma.cart.create({ data: { userId: session?.user.id } });

  const isInCart = session
    ? cart!.items.some((item) => item.bookId === book.id)
    : false;

  return (
    <Flex
      direction="column"
      className="bg-white rounded-xl p-3 hover:bg-gray-50"
      gap="3"
    >
      <Box className="w-full h-64 bg-gray-200 rounded-xl">
        {book.image && (
          <Image src={book.image} alt={book.title} width={300} height={450} />
        )}
      </Box>
      <Info bookId={book.id}>
        <Text className="text-lg font-semibold">{book.title}</Text>
        <Text className="text-sm">
          {author?.name} {author?.surname}
        </Text>
        <Text className="text-cya-500">${book.cost}</Text>
      </Info>
      <AddToCartButton
        bookId={book.id}
        isInCart={isInCart}
        cartId={cart?.id!}
      />
    </Flex>
  );
};

export default Book;
