import { Grid } from "@radix-ui/themes";
import { authorGetter, publisherGetter } from "../getters";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import ListFilter from "./ListFilter";

const AllClientList = async ({ type }: { type: "author" | "publisher" }) => {
  const getter = type === "author" ? authorGetter : publisherGetter;
  const list: AuthorWithBooks[] | PublisherWithBooks[] = await getter();

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl p-3"
    >
      <ListFilter withBooks={list as AuthorWithBooks[]} />
    </Grid>
  );
};

export default AllClientList;
