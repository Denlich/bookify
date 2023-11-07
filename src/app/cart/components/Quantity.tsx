"use client";

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, TextField } from "@radix-ui/themes";
import { useState } from "react";
import cn from "classnames";
import useCartStore from "@/stores/cart-store";

const Quantity = ({
  quantity,
  cartItemId,
}: {
  quantity: number;
  cartItemId: string;
}) => {
  const [amount, setAmount] = useState(quantity);
  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity
  );

  return (
    <Flex gap="1">
      <IconButton
        variant="outline"
        color="cyan"
        className="hover:cursor-pointer"
        onClick={() => {
          setAmount(amount - 1);
          updateCartItemQuantity(amount - 1, cartItemId);
        }}
        disabled={amount === 1}
      >
        <MinusIcon
          className={cn("text-cyan-500", {
            "text-gray-300": amount === 1,
          })}
        />
      </IconButton>

      <TextField.Input
        className="w-16 text-center"
        variant="soft"
        color="cyan"
        defaultValue={amount}
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <IconButton
        variant="outline"
        color="cyan"
        className="hover:cursor-pointer"
        onClick={() => {
          setAmount(amount + 1);
          updateCartItemQuantity(amount + 1, cartItemId);
        }}
      >
        <PlusIcon className="text-cyan-500" />
      </IconButton>
    </Flex>
  );
};

export default Quantity;
