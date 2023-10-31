import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";

export const filterByFirstLetter = (
  items: AuthorWithBooks[] | PublisherWithBooks[],
  letter: string
) => {
  return items.filter((item) => item.name.charAt(0) === letter);
};
