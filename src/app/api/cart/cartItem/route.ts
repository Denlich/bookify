import { cartItemSchema } from "@/validators/cartItemSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { bookId, cartId, quantity } = cartItemSchema.parse(body);
  const validation = cartItemSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const cartItem = await prisma.cartItem.create({
    data: {
      bookId,
      cartId,
      quantity,
    },
  });

  return NextResponse.json(cartItem, { status: 201 });
}
