"use client";

import { AuthorContext } from "@/app/author/all/providers/AuthorProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useContext } from "react";

const AuthorsFilter = ({ authors }: { authors: AuthorWithBooks[] }) => {
  const { letter } = useContext(AuthorContext);

  return authors
    .filter((authors) => authors.name.charAt(0) === letter)
    .map((author) => (
      <Link
        href={`/author/${author.id}`}
        className="hover:cursor-pointer hover:bg-gray-50 transition"
        key={author.id}
      >
        <Flex justify="between" align="center">
          <Text className="text-cyan-700 font-semibold">
            {author.name} {author.surname}
          </Text>
          <Text className="text-gray-500">({author.books!.length})</Text>
        </Flex>
      </Link>
    ));
};

export default AuthorsFilter;
