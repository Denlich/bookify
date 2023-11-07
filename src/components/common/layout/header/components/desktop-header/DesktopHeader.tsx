import authOptions from "@/auth/authOptions";
import { NavLink } from "@/components/common/ui";
import { EnterIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HomeLink from "../HomeLink";
import UserAccountNav from "./UserAccountNav";

const DesktopHeader: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Flex justify="between" align="center" py="3">
      <HomeLink />
      <Flex gap="4">
        <NavLink href="/cart" className="nav-link">
          <AiOutlineShoppingCart />
          Cart
        </NavLink>

        {session?.user ? (
          <UserAccountNav />
        ) : (
          <NavLink href="/sign-in">
            <EnterIcon />
            Login
          </NavLink>
        )}
      </Flex>
    </Flex>
  );
};

export default DesktopHeader;
