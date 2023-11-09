import prisma from "../../../../../../../prisma/client";

export const publisherGetter = async () =>
  await prisma.publisher.findMany({
    include: { books: true },
  });
