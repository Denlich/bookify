import { Session } from "next-auth";
import { FC } from "react";
import { Container, Flex } from "@radix-ui/themes";
import HomeLink from "../HomeLink";
import { NavLink } from "@/components/common/ui";

interface DesktopHeaderProps {
  session: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
}

const DesktopHeader: FC<DesktopHeaderProps> = ({ status }) => {
  return (
    <Container>
      <Flex justify="between" align="center">
        <HomeLink />
        <AuthStatus status={status} />
      </Flex>
    </Container>
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
