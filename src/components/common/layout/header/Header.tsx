import { Container } from "@radix-ui/themes";
import { FC } from "react";
import DesktopHeader from "./components/desktop-header";

const Header: FC = async () => {
  return (
    <Container className="py-4">
      <DesktopHeader />
    </Container>
  );
};

export default Header;
