import { Publisher, Book } from "@prisma/client";

export interface PublisherWithBooks extends Publisher {
  books?: Book[];
}
