import prisma from "../../../../../../../prisma/client";

export const authorGetter = async () =>
  await prisma.author.findMany({
    include: { books: true },
  });
