import { NavLink } from "@/components/common/ui";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";
import { BsCloudArrowDown, BsHeadphones } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside>
      <Flex direction="column" gap="4">
        <NavLink href="/">Sales</NavLink>
        <NavLink href="/">
          <ListBulletIcon /> Categories
        </NavLink>
        <NavLink href="/book/printed">
          <HiOutlineBookOpen />
          Printed books
        </NavLink>
        <NavLink href="/book/e-book">
          <BsCloudArrowDown />
          E-books
        </NavLink>
        <NavLink href="/book/audio">
          <BsHeadphones />
          Audio books
        </NavLink>
        <NavLink href="/publisher/all">Publishing houses</NavLink>
        <NavLink href="/author/all">Authors</NavLink>
      </Flex>
    </aside>
  );
};

export default Sidebar;
