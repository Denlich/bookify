"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import React, { useContext, useMemo } from "react";
import cn from "classnames";
import { FilterContext } from "../providers/FilterProvider";

const Alphabet: React.FC = () => {
  const { letter, setLetter } = useContext(FilterContext);

  const alphabet = useMemo(() => {
    const letters = [];
    for (let i = 97; i <= 122; i++) {
      letters.push(String.fromCharCode(i).toUpperCase());
    }
    return letters;
  }, []);

  return (
    <Flex className="p-3 rounded-xl bg-white" wrap="wrap" gap="3">
      {alphabet.map((l) => (
        <Box
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center hover:bg-cyan-100 hover:cursor-pointer transition",
            {
              ["bg-cyan-500 hover:bg-cyan-400"]: l === letter,
            }
          )}
          onClick={() => setLetter(l)}
          key={l}
        >
          <Text
            className={cn("text-cyan-500 text-xl", {
              ["text-white"]: l === letter,
            })}
          >
            {l}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Alphabet;
