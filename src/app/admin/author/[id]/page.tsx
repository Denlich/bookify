import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../../prisma/client";
import DeleteAuthorButton from "../../../../components/pages/author-publisher/all/components/DeleteAuthorButton";
import AuthorForm from "../components/AuthorForm";

const UpdateAuthorPage = async ({ params }: { params: { id: string } }) => {
  const author = await prisma.author.findUnique({ where: { id: params.id } });

  if (!author) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <AuthorForm author={author} />
      </Box>
      <DeleteAuthorButton authorId={author.id} />
    </Grid>
  );
};

export default UpdateAuthorPage;
