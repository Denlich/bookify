import Book from "@/app/book/components/Book";
import { Grid } from "@radix-ui/themes";

const Books = ({ books }: { books: Book[] }) => {
  return (
    <Grid
      gap="3"
      columns={{ initial: "1", sm: "2", md: "3" }}
      className="bg-white rounded-xl p-5 mt-5"
    >
      {books.map((book) => (
        <Book book={book} authorId={book.authorId} key={book.id} />
      ))}
    </Grid>
  );
};

export default Books;
