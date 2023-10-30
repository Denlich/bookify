"use client";

import { Flex, Text } from "@radix-ui/themes";
import { useMemo, useState } from "react";
import Alphabet from "./components/Alphabet";

const AllAuthorsPage = () => {
  const [isActive, setIsActive] = useState("A");

  return (
    <Flex direction="column" gap="5">
      <Text>All Authors</Text>
      <Alphabet isActive={isActive} setIsActive={setIsActive} />
    </Flex>
  );
};

export default AllAuthorsPage;
