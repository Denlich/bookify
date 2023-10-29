import { Author } from "@prisma/client";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const Header = ({ author }: { author: Author }) => {
  return (
    <Grid
      gap="5"
      p="5"
      columns={{ initial: "1", sm: "5" }}
      className="bg-white rounded-xl"
    >
      <Box className="w-full h-72 md:h-52 rounded-lg bg-slate-300">
        {author.image && (
          <Image
            src={author.image}
            alt={`${author.name} ${author.surname}`}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </Box>
      <Flex className="md:col-span-3" direction="column" gap="5">
        <Text className="text-2xl font-bold">
          {author.name} {author.surname} – Books and biography
        </Text>
        {author.biography && <Text>{author.biography}</Text>}
      </Flex>
    </Grid>
  );
};

export default Header;
