import { Book } from "@prisma/client";
import { Grid } from "@radix-ui/themes";
import React from "react";

const Books = ({ books }: { books: Book[] }) => {
  return (
    <Grid gap="3" columns="3" className="bg-white rounded-xl p-5 mt-5">
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
        </div>
      ))}
    </Grid>
  );
};

export default Books;
