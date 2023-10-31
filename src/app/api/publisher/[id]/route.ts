import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { publisherSchema } from "@/validators/publisherSchema";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { name, image, biography, books } = publisherSchema.parse(body);
  const validation = publisherSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const publisher = await prisma.publisher.findUnique({
    where: { id: params.id },
  });
  if (!publisher)
    return NextResponse.json({ error: "Invalid publisher." }, { status: 404 });

  const updatedPublisher = await prisma.publisher.update({
    where: { id: params.id },
    data: {
      name,
      image,
      biography,
      books: {
        connect: books?.map((bookId) => ({ id: bookId })),
      },
    },
  });

  return NextResponse.json(updatedPublisher, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const publisher = await prisma.publisher.findUnique({
    where: { id: params.id },
  });
  if (!publisher)
    return NextResponse.json({ error: "Invalid publisher." }, { status: 404 });

  await prisma.publisher.delete({ where: { id: publisher.id } });
  return NextResponse.json({}, { status: 200 });
}
