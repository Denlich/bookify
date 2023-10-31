"use client";

import { FilterContext } from "@/components/pages/author-publisher/all/providers/FilterProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { useContext } from "react";
import { Table } from "@radix-ui/themes";
import ActionButtons from "../ActionButtons";
import { useRouter } from "next/navigation";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";

const TableFilter = ({
  withBooks,
}: {
  withBooks: AuthorWithBooks[] | PublisherWithBooks[];
}) => {
  const router = useRouter();
  const { letter } = useContext(FilterContext);

  return withBooks
    .filter((item) => item.name.charAt(0) === letter)
    .map((item: AuthorWithBooks | PublisherWithBooks) => (
      <Table.Row key={item.id} className="hover:bg-gray-100 cursor-pointer">
        <Table.Cell
          onClick={() =>
            router.push(
              `/${"surname" in item ? "author" : "publisher"}/${item.id}`
            )
          }
        >
          {item.name} {"surname" in item ? item.surname : null}
        </Table.Cell>
        <Table.Cell
          onClick={() =>
            router.push(
              `/${"surname" in item ? "author" : "publisher"}/${item.id}`
            )
          }
          justify="center"
        >
          {item.biography
            ? `${item.biography.slice(0, 30)}...`
            : "No biography"}
        </Table.Cell>
        <Table.Cell>
          <ActionButtons authorId={item.id} />
        </Table.Cell>
      </Table.Row>
    ));
};

export default TableFilter;
