"use client";

import { NavLink } from "@/components/common/ui";
import { Flex } from "@radix-ui/themes";
import { links } from "../data/links";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";

const Sidebar = () => {
  const windowWidth = useGetWindowWidth();

  if (windowWidth < 768) return null;

  return (
    <aside>
      <Flex direction="column" gap="4">
        {links.map(({ label, href, Icon }) => (
          <NavLink key={href} href={href}>
            {Icon && <Icon />}
            {label}
          </NavLink>
        ))}
      </Flex>
    </aside>
  );
};

export default Sidebar;
