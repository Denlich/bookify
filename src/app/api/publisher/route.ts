import { publisherSchema } from "@/validators/publisherSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, biography, image } = publisherSchema.parse(body);
  const validation = publisherSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newPublishingHouse = await prisma.publisher.create({
    data: {
      name,
      image,
      biography,
    },
  });

  return NextResponse.json(newPublishingHouse, { status: 201 });
}

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name");
  const publishingHouse = await prisma.publisher.findMany({
    where: {
      name: {
        contains: name || "",
      },
    },
    take: 10,
  });

  return NextResponse.json(publishingHouse, { status: 200 });
}
