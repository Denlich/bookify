"use client";

import { FilterContext } from "@/components/pages/author-publisher/all/providers/FilterProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useContext, useMemo } from "react";
import { filterByFirstLetter } from "../utils";

const ListFilter = ({
  withBooks,
}: {
  withBooks: AuthorWithBooks[] | PublisherWithBooks[];
}) => {
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
    <Link
      href={`${route}/${item.id}`}
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
