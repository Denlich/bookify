import Book from "@/app/book/components/Book";
import { Author, Book as BookType } from "@prisma/client";
import { Grid } from "@radix-ui/themes";

const HomePage = ({ books }: { books: BookType[] }) => {
  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl"
      p="3"
    >
      {books.map((book) => (
        <Book book={book} authorId={book.authorId} key={book.id} />
      ))}
    </Grid>
  );
};

export default HomePage;
