import { Box, Flex, Grid, IconButton, Text } from "@radix-ui/themes";
import prisma from "../../../../prisma/client";
import Book from "../components/Book";

const PrintedBooksListPage = async () => {
  const list = await prisma.book.findMany({
    where: { type: "PAPERBACK" },
    include: {
      authors: {
        select: {
          name: true,
          surname: true,
          id: true,
        },
      },
    },
  });

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl p-3"
    >
      {list.map((book) => (
        <Book book={book} authors={book.authors} key={book.id} />
      ))}
    </Grid>
  );
};

export default PrintedBooksListPage;
