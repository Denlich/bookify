import { Author } from "@prisma/client";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";

const Header = ({ author }: { author: Author }) => {
  return (
    <Grid
      gap="5"
      py="5"
      px="3"
      columns={{ initial: "1", sm: "5" }}
      className="bg-white rounded-xl"
    >
      <Box></Box>
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
