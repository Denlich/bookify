import authOptions from "@/auth/authOptions";
import { Flex, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import prisma from "../../../prisma/client";
import Header from "./components/Header";
import Items from "./components/Items";

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

export const dynamic = "force-dynamic";

export default CartPage;
