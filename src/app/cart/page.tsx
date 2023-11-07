import { Flex, Text } from "@radix-ui/themes";
import Items from "./components/Items";
import { getServerSession } from "next-auth";
import authOptions from "@/auth/authOptions";

const CartPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Flex direction="column" gap="5" p="3" className="bg-white rounded-xl">
      <Text size="5" weight="bold">
        Cart
      </Text>
      {session?.user.id ? (
        <Items userId={session?.user.id} />
      ) : (
        <Text size="3">You need to be logged in to see your cart</Text>
      )}
    </Flex>
  );
};

export default CartPage;
