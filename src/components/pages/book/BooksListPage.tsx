import React from "react";
import prisma from "../../../../prisma/client";
import { Grid, Text } from "@radix-ui/themes";
import Book from "@/app/book/components/Book";

const BooksListPage = async ({
  type,
}: {
  type: "AUDIOBOOK" | "PAPERBACK" | "EBOOK";
}) => {
  const list = await prisma.book.findMany({ where: { type } });

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl p-3"
    >
      {list.length > 0 ? (
        list.map((book) => (
          <Book book={book} authorId={book.authorId} key={book.id} />
        ))
      ) : (
        <Text>No books found</Text>
      )}
    </Grid>
  );
};

export default BooksListPage;
