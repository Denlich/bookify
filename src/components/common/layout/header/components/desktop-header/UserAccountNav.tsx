"use client";

import { NavLink } from "@/components/common/ui";
import { ExitIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";
import React from "react";

const UserAccountNav = () => {
  return (
    <NavLink
      href="#"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      className="text-red-500"
    >
      <ExitIcon />
      Log out
    </NavLink>
  );
};

export default UserAccountNav;
