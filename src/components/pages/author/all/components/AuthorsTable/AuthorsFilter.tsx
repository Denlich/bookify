"use client";

import { AuthorContext } from "@/app/author/all/providers/AuthorProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { useContext } from "react";
import { Table } from "@radix-ui/themes";
import ActionButtons from "../ActionButtons";
import { useRouter } from "next/navigation";

const AuthorsFilter = ({ authors }: { authors: AuthorWithBooks[] }) => {
  const router = useRouter();
  const { letter } = useContext(AuthorContext);

  return authors
    .filter((authors) => authors.name.charAt(0) === letter)
    .map((author) => (
      <Table.Row
        key={author.id}
        onClick={() => router.push(`/author/${author.id}`)}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <Table.Cell>
          {author.name} {author.surname}
        </Table.Cell>
        <Table.Cell justify="center">
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
