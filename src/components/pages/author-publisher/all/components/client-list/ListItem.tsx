"use client";

import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useMemo } from "react";

const ListItem = ({ item }: { item: AuthorWithBooks | PublisherWithBooks }) => {
  const route = useMemo(() => {
    return "surname" in item ? "author" : "publisher";
  }, [item]);

  return (
    <Link
      href={`/${route}/${item.id}`}
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
  );
};

export default ListItem;
