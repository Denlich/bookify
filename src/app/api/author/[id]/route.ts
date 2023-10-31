import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { authorSchema } from "@/validators/authorSchema";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { name, surname, image, biography, books } = authorSchema.parse(body);
  const validation = authorSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const author = await prisma.author.findUnique({
    where: { id: params.id },
  });
  if (!author)
    return NextResponse.json({ error: "Invalid author." }, { status: 404 });

  const updatedAuthor = await prisma.author.update({
    where: { id: params.id },
    data: {
      name,
      surname,
      image,
      biography,
      books: {
        connect: books?.map((bookId) => ({ id: bookId })),
      },
    },
  });

  return NextResponse.json(updatedAuthor, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const author = await prisma.author.findUnique({
    where: { id: params.id },
  });
  if (!author)
    return NextResponse.json({ error: "Invalid author." }, { status: 404 });

  await prisma.author.delete({ where: { id: author.id } });
  return NextResponse.json({}, { status: 200 });
}
