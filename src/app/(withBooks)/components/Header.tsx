import { Author, Publisher } from "@prisma/client";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));

const Header = ({ entity }: { entity: Author | Publisher }) => {
  return (
    <Grid
      gap="5"
      p="5"
      columns={{ initial: "1", sm: "5" }}
      className="bg-white rounded-xl"
    >
      <Box className="w-full h-72 md:h-52 rounded-lg bg-slate-300">
        {entity?.image && (
          <Image
            src={entity.image}
            alt={`${entity.name} ${"surname" in entity && entity.surname}`}
            className="w-full h-full object-cover rounded-lg"
            width={516}
            height={680}
            priority
          />
        )}
      </Box>
      <Flex className="md:col-span-3" direction="column" gap="5">
        <Text className="text-2xl font-bold">
          {entity?.name}{" "}
          {"surname" in entity && entity.surname + " – Books and biography"}
        </Text>
        {entity?.biography && <Text>{entity.biography}</Text>}
      </Flex>
    </Grid>
  );
};

export default Header;
