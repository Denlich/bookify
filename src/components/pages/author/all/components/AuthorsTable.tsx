import { Table } from "@radix-ui/themes";
import prisma from "../../../../../../prisma/client";
import ActionButtons from "./ActionButtons";

const AuthorsTable = async () => {
  const authors = await prisma.author.findMany();

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Biography</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {authors.map((author) => (
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
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default AuthorsTable;
