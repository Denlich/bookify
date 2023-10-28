"use client";

import React, { FC } from "react";
import { useSession } from "next-auth/react";
import DesktopHeader from "./components/desktop-header";
import { Container } from "@radix-ui/themes";

const Header: FC = () => {
  const { status, data: session } = useSession();
  return (
    <Container className="py-4">
      <DesktopHeader session={session} status={status} />
    </Container>
  );
};

export default Header;
