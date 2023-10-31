"use client";

import { FilterContext } from "@/components/pages/author-publisher/all/providers/FilterProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useContext } from "react";

const ListFilter = ({
  withBooks,
}: {
  withBooks: AuthorWithBooks[] | PublisherWithBooks[];
}) => {
  const { letter } = useContext(FilterContext);

  return withBooks
    .filter((item) => item.name.charAt(0) === letter)
    .map((item: AuthorWithBooks | PublisherWithBooks) => (
      <Link
        href={`/${"surname" in item ? "author" : "publisher"}/${item.id}`}
        className="hover:cursor-pointer hover:bg-gray-50 transition"
        key={item.id}
      >
        <Flex justify="between" align="center">
          <Text className="text-cyan-700 font-semibold">
            {item.name} {"surname" in item ? item.surname : null}
          </Text>
          <Text className="text-gray-500">({item.books!.length})</Text>
        </Flex>
      </Link>
    ));
};

export default ListFilter;
