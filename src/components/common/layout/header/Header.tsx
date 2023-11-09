import { Container, Flex } from "@radix-ui/themes";
import { FC } from "react";
import HomeLink from "./components/HomeLink";
import CurrentHeader from "./components/CurrentHeader";

const Header: FC = () => {
  return (
    <Container className="py-4" mx="3">
      <Flex justify="between" align="center" py="3">
        <HomeLink />
        <CurrentHeader />
      </Flex>
    </Container>
  );
};

export default Header;
