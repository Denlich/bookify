import { Flex, Text } from "@radix-ui/themes";
import Items from "./components/Items";
import { getServerSession } from "next-auth";
import authOptions from "@/auth/authOptions";
import Header from "./components/Header";
import prisma from "../../../prisma/client";

const CartPage = async () => {
  const session = await getServerSession(authOptions);
  const cart = await prisma.cart.findUnique({
    where: { userId: session?.user.id },
    include: { items: true },
  });

  return (
    <Flex direction="column" gap="5" p="3" className="bg-white rounded-xl">
      <Header isEmpty={cart?.items.length === 0} />
      {session?.user.id ? (
        <Items userId={session?.user.id} />
      ) : (
        <Text size="3">You need to be logged in to see your cart</Text>
      )}
    </Flex>
  );
};

export default CartPage;
