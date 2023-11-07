import { NavLink } from "@/components/common/ui";
import { Flex } from "@radix-ui/themes";
import { BsCloudArrowDown, BsHeadphones } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";

const Sidebar = () => {
  const links = [
    {
      label: "Printed books",
      href: "/book/printed",
      Icon: () => <HiOutlineBookOpen />,
    },
    {
      label: "E-books",
      href: "/book/e-book",
      Icon: () => <BsCloudArrowDown />,
    },
    { label: "Audio books", href: "/book/audio", Icon: () => <BsHeadphones /> },
    { label: "Publishing houses", href: "/publisher/all" },
    { label: "Authors", href: "/author/all" },
  ];

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
