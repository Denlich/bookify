"use client";

import { AuthorContext } from "@/app/author/all/providers/AuthorProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { useContext } from "react";
import { Table } from "@radix-ui/themes";
import ActionButtons from "../ActionButtons";

const AuthorsFilter = ({ authors }: { authors: AuthorWithBooks[] }) => {
  const { letter } = useContext(AuthorContext);

  return authors
    .filter((authors) => authors.name.charAt(0) === letter)
    .map((author) => (
      <Table.Row key={author.id}>
        <Table.Cell>
          {author.name} {author.surname}
        </Table.Cell>
        <Table.Cell>
          {author.biography
            ? `${author.biography.slice(0, 30)}...`
            : "No biography"}
        </Table.Cell>
        <Table.Cell>
          <ActionButtons authorId={author.id} />
        </Table.Cell>
      </Table.Row>
    ));
};

export default AuthorsFilter;
