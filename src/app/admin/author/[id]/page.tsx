import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../../prisma/client";
import DeleteButton from "../../../../components/pages/author-publisher/all/components/DeleteButton";
import AuthorForm from "../components/AuthorForm";

const UpdateAuthorPage = async ({ params }: { params: { id: string } }) => {
  const author = await prisma.author.findUnique({ where: { id: params.id } });

  if (!author) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <AuthorForm author={author} />
      </Box>
      <DeleteButton itemId={author.id} type="author" />
    </Grid>
  );
};

export default UpdateAuthorPage;
