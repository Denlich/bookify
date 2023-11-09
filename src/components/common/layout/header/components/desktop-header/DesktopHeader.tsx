import { NavLink } from "@/components/common/ui";
import { Flex } from "@radix-ui/themes";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Status from "./components/Status";

const DesktopHeader: FC = () => {
  return (
    <Flex gap="4">
      <NavLink href="/cart">
        <AiOutlineShoppingCart />
        Cart
      </NavLink>
      <Status />
    </Flex>
  );
};

export default DesktopHeader;
