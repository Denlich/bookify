import authOptions from "@/auth/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const cart = await prisma.cart.findUnique({
    where: { userId: session?.user.id },
    include: { items: true },
  });

  const cartItemIds = cart?.items.map((item) => item.id);
  await prisma.cartItem.deleteMany({
    where: {
      id: { in: cartItemIds },
    },
  });

  return NextResponse.json({ message: "Cart cleared" }, { status: 200 });
}
