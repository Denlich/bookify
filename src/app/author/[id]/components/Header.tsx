import { Author } from "@prisma/client";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import React from "react";

const Image = dynamic(() => import("next/image"));

const Header = ({ author }: { author?: Author }) => {
  return (
    <Grid
      gap="5"
      p="5"
      columns={{ initial: "1", sm: "5" }}
      className="bg-white rounded-xl"
    >
      <Box className="w-full h-72 md:h-52 rounded-lg bg-slate-300">
        {author?.image && (
          <Image
            src={author.image}
            alt={`${author.name} ${author.surname}`}
            className="w-full h-full object-cover rounded-lg"
            width={516}
            height={680}
            priority
          />
        )}
      </Box>
      <Flex className="md:col-span-3" direction="column" gap="5">
        <Text className="text-2xl font-bold">
          {author?.name} {author?.surname} – Books and biography
        </Text>
        {author?.biography && <Text>{author.biography}</Text>}
      </Flex>
    </Grid>
  );
};

export default Header;
