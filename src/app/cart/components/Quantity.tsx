"use client";

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, TextField } from "@radix-ui/themes";
import { useState } from "react";

const Quantity = ({ quantity }: { quantity: number }) => {
  const [amount, setAmount] = useState(quantity);

  return (
    <Flex gap="1">
      <IconButton
        variant="outline"
        color="cyan"
        className="hover:cursor-pointer"
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 1}
      >
        <MinusIcon className="text-cyan-500" />
      </IconButton>

      <TextField.Input
        className="w-16 text-center"
        variant="soft"
        color="cyan"
        defaultValue={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <IconButton
        variant="outline"
        color="cyan"
        className="hover:cursor-pointer"
        onClick={() => setAmount(amount + 1)}
      >
        <PlusIcon className="text-cyan-500" />
      </IconButton>
    </Flex>
  );
};

export default Quantity;
