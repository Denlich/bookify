import { Author, Book } from "@prisma/client";

export interface AuthorWithBooks extends Author {
  books?: Book[];
}
