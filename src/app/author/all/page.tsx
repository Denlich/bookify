import { Flex, Text } from "@radix-ui/themes";
import Alphabet from "./components/Alphabet";
import Authors from "./components/Authors";
import AuthorProvider from "./providers/AuthorProvider";

const AllAuthorsPage = () => {
  return (
    <Flex direction="column" gap="5">
      <Text>All Authors</Text>
      <AuthorProvider>
        <Alphabet />
        <Authors />
      </AuthorProvider>
    </Flex>
  );
};

export default AllAuthorsPage;
