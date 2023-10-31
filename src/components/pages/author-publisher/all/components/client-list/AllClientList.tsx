import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { Grid } from "@radix-ui/themes";
import Filter from "../Filter";
import { authorGetter, publisherGetter } from "../utils";

const AllClientList = async ({ type }: { type: "author" | "publisher" }) => {
  const getter = type === "author" ? authorGetter : publisherGetter;
  const list: AuthorWithBooks[] | PublisherWithBooks[] = await getter();

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl p-3"
    >
      <Filter withBooks={list} />
    </Grid>
  );
};

export default AllClientList;
