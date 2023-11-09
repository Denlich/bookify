import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Box, Dialog, Flex, IconButton } from "@radix-ui/themes";
import { links } from "../../../data/links";
import { NavLink } from "@/components/common/ui";
import Status from "../desktop-header/components/Status";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MobileHeader = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton className="bg-white text-cyan-500">
          <HamburgerMenuIcon width="18" height="18" />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content>
        <Flex direction="column" gap="3">
          {links.map((link) => (
            <Dialog.Close
              key={link.label}
              className="bg-gray-50 p-3 rounded-lg"
            >
              <NavLink href={link.href}>{link.label}</NavLink>
            </Dialog.Close>
          ))}
          <Box className="bg-gray-50 p-3 rounded-lg">
            <Dialog.Close>
              <NavLink href="/cart">
                <AiOutlineShoppingCart />
                Cart
              </NavLink>
            </Dialog.Close>
          </Box>
          <Box className="bg-gray-50 p-3 rounded-lg">
            <Dialog.Close>
              <Status />
            </Dialog.Close>
          </Box>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MobileHeader;
