"use client";

import { Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const Container = ({
  bookId,
  children,
}: PropsWithChildren<{ bookId: string }>) => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      className="bg-white rounded-xl p-3 hover:cursor-pointer hover:bg-gray-50"
      gap="3"
      onClick={() => router.push(`/book/${bookId}`)}
    >
      {children}
    </Flex>
  );
};

export default Container;
