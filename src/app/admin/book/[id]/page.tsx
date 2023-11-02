import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../../prisma/client";
import DeleteButton from "../../../../components/pages/author-publisher/all/components/DeleteButton";
import BookForm from "../components/BookForm";

const UpdateBookPage = async ({ params }: { params: { id: string } }) => {
  const book = await prisma.book.findUnique({ where: { id: params.id } });

  if (!book) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <BookForm book={book} />
      </Box>
      <DeleteButton itemId={book.id} type="book" />
    </Grid>
  );
};

export default UpdateBookPage;
