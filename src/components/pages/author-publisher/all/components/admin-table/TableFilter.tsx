"use client";

import { FilterContext } from "@/components/pages/author-publisher/all/providers/FilterProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { useContext, useMemo } from "react";
import { Table, Text } from "@radix-ui/themes";
import ActionButtons from "../ActionButtons";
import { useRouter } from "next/navigation";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { filterByFirstLetter } from "../utils";

const TableFilter = ({
  withBooks,
}: {
  withBooks: AuthorWithBooks[] | PublisherWithBooks[];
}) => {
  const router = useRouter();
  const { letter } = useContext(FilterContext);
  const route = useMemo(() => {
    `/${"surname" in withBooks[0] ? "author" : "publisher"}`;
  }, [withBooks]);

  const filtered = filterByFirstLetter(withBooks, letter);

  if (filtered.length === 0) {
    return (
      <Text className="text-center text-gray-500">
        There are no items with this letter
      </Text>
    );
  }

  return filtered.map((item: AuthorWithBooks | PublisherWithBooks) => (
    <Table.Row key={item.id} className="hover:bg-gray-100 cursor-pointer">
      <Table.Cell onClick={() => router.push(`/${route}/${item.id}`)}>
        {item.name} {"surname" in item ? item.surname : null}
      </Table.Cell>
      <Table.Cell
        onClick={() => router.push(`${route}/${item.id}`)}
        justify="center"
      >
        {item.biography ? `${item.biography.slice(0, 30)}...` : "No biography"}
      </Table.Cell>
      <Table.Cell>
        <ActionButtons authorId={item.id} />
      </Table.Cell>
    </Table.Row>
  ));
};

export default TableFilter;
