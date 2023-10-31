import { Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";
import prisma from "../../../../../../prisma/client";
import Link from "next/link";

const Authors = async () => {
  const authors = await prisma.author.findMany({ include: { books: true } });

  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3" }}
      gap="3"
      className="bg-white rounded-xl p-3"
    >
      {authors.map((author) => (
        <Link href={`/author/${author.id}`} key={author.id}>
          <Flex justify="between" align="center">
            <Text className="text-cyan-700 font-semibold">
              {author.name} {author.surname}
            </Text>
            <Text className="text-gray-500">({author.books.length})</Text>
          </Flex>
        </Link>
      ))}
    </Grid>
  );
};

export default Authors;
