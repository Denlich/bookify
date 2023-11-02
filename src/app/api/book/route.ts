import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { bookSchema } from "@/validators/bookSchema";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description, cost, type, image, publisherId, authorId } =
    bookSchema.parse(body);
  const validation = bookSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newAuthor = await prisma.book.create({
    data: {
      title,
      description,
      image,
      type,
      cost,
      publisherId,
      authorId,
    },
  });

  return NextResponse.json(newAuthor, { status: 201 });
}
