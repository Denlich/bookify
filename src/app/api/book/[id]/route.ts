import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { bookSchema } from "@/validators/bookSchema";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { authorId, cost, description, publisherId, title, type, image } =
    bookSchema.parse(body.data);
  const validation = bookSchema.safeParse(body.data);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const book = await prisma.book.findUnique({
    where: { id: params.id },
  });
  if (!book)
    return NextResponse.json({ error: "Invalid book." }, { status: 404 });

  const updateBook = await prisma.book.update({
    where: { id: params.id },
    data: {
      title,
      authorId,
      cost,
      description,
      publisherId,
      type,
      image,
    },
  });

  return NextResponse.json(updateBook, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const book = await prisma.book.findUnique({
    where: { id: params.id },
  });
  if (!book)
    return NextResponse.json({ error: "Invalid book." }, { status: 404 });

  await prisma.book.delete({ where: { id: book.id } });
  return NextResponse.json({}, { status: 200 });
}
