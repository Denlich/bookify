import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";

export const filterByFirstLetter = (
  items: AuthorWithBooks[] | PublisherWithBooks[],
  letter: string
): AuthorWithBooks[] | PublisherWithBooks[] => {
  return items.filter((item) => item.name.charAt(0).toUpperCase() === letter);
};
