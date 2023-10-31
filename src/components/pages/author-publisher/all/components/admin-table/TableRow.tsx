"use client";

import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { Table } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import ActionButtons from "../ActionButtons";

const TableRow = ({ item }: { item: AuthorWithBooks | PublisherWithBooks }) => {
  const router = useRouter();
  const route = useMemo(() => {
    return "surname" in item ? "author" : "publisher";
  }, [item]);

  return (
    <Table.Row key={item.id} className="hover:bg-gray-100 cursor-pointer">
      <Table.Cell onClick={() => router.push(`/${route}/${item.id}`)}>
        {item.name} {"surname" in item ? item.surname : null}
      </Table.Cell>
      <Table.Cell
        onClick={() => router.push(`/${route}/${item.id}`)}
        justify="center"
      >
        {item.biography ? `${item.biography.slice(0, 30)}...` : "No biography"}
      </Table.Cell>
      <Table.Cell>
        <ActionButtons itemId={item.id} type={route} />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
