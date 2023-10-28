import React, { FC } from "react";
import DesktopHeader from "./components/desktop-header";
import { Container } from "@radix-ui/themes";

const Header: FC = async () => {
  return (
    <Container className="py-4">
      <DesktopHeader />
    </Container>
  );
};

export default Header;
