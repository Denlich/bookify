"use client";

import { Flex, Text } from "@radix-ui/themes";
import axios from "axios";

const Header = ({ isEmpty }: { isEmpty: boolean }) => {
  return (
    <Flex justify="between" align="center">
      <Text size="7" color="cyan" weight="bold">
        Cart
      </Text>
      {!isEmpty && (
        <Text
          color="cyan"
          className="hover:cursor-pointer hover:text-red-500 transition"
          onClick={async () => {
            await axios.delete(`/api/cart`);
            window.location.reload();
          }}
        >
          Clear
        </Text>
      )}
    </Flex>
  );
};

export default Header;
