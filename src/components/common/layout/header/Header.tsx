"use client";

import React, { FC } from "react";
import { useSession } from "next-auth/react";
import DesktopHeader from "./components/desktop-header";

const Header: FC = () => {
  const { status, data: session } = useSession();
  return <DesktopHeader session={session} status={status} />;
};

export default Header;
