import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const authorSchema = z.object({
  name: z.string().min(2, "Name is required").max(20),
  surname: z.string().min(3, "Surname is required").max(30),
  image: z.string().optional(),
  biography: z.string().min(10, "Biography is required").max(500).optional(),
  books: z.array(z.string()).optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, surname, image, biography, books } = authorSchema.parse(body);
  const validation = authorSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newAuthor = await prisma.author.create({
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

  return NextResponse.json(newAuthor, { status: 201 });
}
