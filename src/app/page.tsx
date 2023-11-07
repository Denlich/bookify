import prisma from "../../prisma/client";
import HomePage from "@/components/pages/home/HomePage";

export default async function Home() {
  const books = await prisma.book.findMany();

  return <HomePage books={books} />;
}
