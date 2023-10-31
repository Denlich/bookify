import React from "react";
import prisma from "../../../../prisma/client";
import { Grid } from "@radix-ui/themes";
import Book from "@/app/book/components/Book";

const BooksListPage = async ({
  type,
}: {
  type: "AUDIOBOOK" | "PAPERBACK" | "EBOOK";
}) => {
  const list = await prisma.book.findMany({
    where: { type },
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

export default BooksListPage;
