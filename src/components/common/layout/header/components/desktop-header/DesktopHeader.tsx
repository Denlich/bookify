import { Session } from "next-auth";
import { FC } from "react";
import { Flex } from "@radix-ui/themes";
import HomeLink from "../HomeLink";
import { NavLink } from "@/components/common/ui";
import { EnterIcon } from "@radix-ui/react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface DesktopHeaderProps {
  session: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
}

const DesktopHeader: FC<DesktopHeaderProps> = ({ status }) => {
  return (
    <Flex justify="between" align="center">
      <HomeLink />
      <Flex gap="4">
        <NavLink href="/cart" className="nav-link">
          <AiOutlineShoppingCart />
          Cart
        </NavLink>
        <AuthStatus status={status} />
      </Flex>
    </Flex>
  );
};

const AuthStatus = ({
  status,
}: {
  status: "authenticated" | "loading" | "unauthenticated";
}) => {
  if (status === "unauthenticated")
    return (
      <NavLink href="/api/auth/signin" className="nav-link">
        <EnterIcon />
        Login
      </NavLink>
    );

  return (
    <NavLink href="/api/auth/signout" className="nav-link">
      Log out
    </NavLink>
  );
};

export default DesktopHeader;
