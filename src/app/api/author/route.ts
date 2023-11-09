import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { authorSchema } from "@/validators/authorSchema";

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

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");
  const author = await prisma.author.findMany({
    where: {
      OR: [
        {
          name: {
            contains: name || "",
          },
        },
        {
          surname: {
            contains: name || "",
          },
        },
      ],
    },
    take: 10,
  });

  return NextResponse.json(author, { status: 200 });
}
