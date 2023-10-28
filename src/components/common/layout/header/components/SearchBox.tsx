"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";

const SearchBox: React.FC = () => {
  return (
    <TextField.Root className="w-1/2">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input
        className="w-full"
        placeholder="Search the docs…"
        size="3"
        radius="full"
      />
    </TextField.Root>
  );
};

export default SearchBox;
