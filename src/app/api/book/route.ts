import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { bookSchema } from "@/validators/bookSchema";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, publisherId, authors } = bookSchema.parse(body);
  const validation = bookSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newAuthor = await prisma.book.create({
    data: {
      title,
      publisherId,
      authors: {
        connect: authors?.map((authorId) => ({ id: authorId })),
      },
    },
  });

  return NextResponse.json(newAuthor, { status: 201 });
}
