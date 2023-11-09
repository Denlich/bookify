"use client";

import { NavLink } from "@/components/common/ui";
import { EnterIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";

const Status = () => {
  const { status } = useSession();

  return status === "authenticated" ? (
    <UserAccountNav />
  ) : (
    <NavLink href="/sign-in">
      <EnterIcon />
      Login
    </NavLink>
  );
};

export default Status;
