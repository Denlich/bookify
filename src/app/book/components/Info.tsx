"use client";

import { Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const Info = ({ children, bookId }: PropsWithChildren<{ bookId: string }>) => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      className="hover:cursor-pointer"
      onClick={() => router.push(`/book/${bookId}`)}
    >
      {children}
    </Flex>
  );
};

export default Info;
