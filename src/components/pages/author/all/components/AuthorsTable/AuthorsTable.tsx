import { Table } from "@radix-ui/themes";
import prisma from "../../../../../../../prisma/client";
import AuthorsFilter from "./AuthorsFilter";

const AuthorsTable = async () => {
  const authors = await prisma.author.findMany();

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
        <AuthorsFilter authors={authors} />
      </Table.Body>
    </Table.Root>
  );
};

export default AuthorsTable;
