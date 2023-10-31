import { Table } from "@radix-ui/themes";
import TableFilter from "./TableFilter";
import { authorGetter, publisherGetter } from "../utils";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";

const AllAdminTable = async ({ type }: { type: "author" | "publisher" }) => {
  const getter = type === "author" ? authorGetter : publisherGetter;
  const list: AuthorWithBooks[] | PublisherWithBooks[] = await getter();

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="center">
            Biography
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify="end">Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <TableFilter withBooks={list} />
      </Table.Body>
    </Table.Root>
  );
};

export default AllAdminTable;
