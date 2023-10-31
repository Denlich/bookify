import { Grid } from "@radix-ui/themes";
import prisma from "../../../../../../../prisma/client";
import AuthorsFilter from "./AuthorsFilter";

const AuthorsList = async () => {
  const authors = await prisma.author.findMany({
    include: { books: true },
  });

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl p-3"
    >
      <AuthorsFilter authors={authors} />
    </Grid>
  );
};

export default AuthorsList;
