import React from "react";
import { Flex } from "@radix-ui/themes";
import { NavLink } from "../../ui";

const Sidebar = () => {
  return (
    <aside>
      <Flex direction="column">
        <NavLink href="/">Sales</NavLink>
      </Flex>
    </aside>
  );
};

export default Sidebar;
