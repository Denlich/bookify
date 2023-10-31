import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../../prisma/client";
import DeleteButton from "../../../../components/pages/author-publisher/all/components/DeleteButton";
import PublisherForm from "../components/PublisherForm";

const UpdatePublisherPage = async ({ params }: { params: { id: string } }) => {
  const publisher = await prisma.publisher.findUnique({
    where: { id: params.id },
  });

  if (!publisher) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <PublisherForm publisher={publisher} />
      </Box>
      <DeleteButton itemId={publisher.id} type="publisher" />
    </Grid>
  );
};

export default UpdatePublisherPage;
