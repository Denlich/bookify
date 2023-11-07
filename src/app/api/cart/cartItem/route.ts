import { cartItemSchema } from "@/validators/cartItemSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/auth/authOptions";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { bookId, quantity } = cartItemSchema.parse(body);
  const validation = cartItemSchema.safeParse(body);
  const session = await getServerSession(authOptions);
  const cart = await prisma.cart.findUnique({
    where: { userId: session?.user.id },
  });

  if (!cart) {
    await prisma.cart.create({
      data: {
        userId: session?.user.id!,
      },
    });
  }

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const cartItem = await prisma.cartItem.create({
    data: {
      bookId,
      cartId: cart!.id,
      quantity,
    },
  });

  return NextResponse.json(cartItem, { status: 201 });
}
