import AuthorProvider from "@/app/author/all/providers/AuthorProvider";
import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import Alphabet from "./components/Alphabet";
import dynamic from "next/dynamic";

const AuthorsList = dynamic(
  () => import("./components/AuthorsList/AuthorsList")
);
const AuthorsTable = dynamic(
  () => import("./components/AuthorsTable/AuthorsTable")
);

const AllAuthorsListPage = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  return (
    <Flex direction="column" gap="5">
      <Text size="5" className="font-bold text-cyan-700">
        All Authors
      </Text>
      <AuthorProvider>
        <Alphabet />
        {isAdmin ? <AuthorsTable /> : <AuthorsList />}
      </AuthorProvider>
    </Flex>
  );
};

export default AllAuthorsListPage;
