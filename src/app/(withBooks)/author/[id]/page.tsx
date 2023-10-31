import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import prisma from "../../../../../prisma/client";
import Header from "../../components/Header";

interface AuthPageProps {
  params: {
    id: string;
  };
}

const Books = dynamic(() => import("../../components/Books"));

const AuthorPage = async ({ params }: AuthPageProps) => {
  const author = await prisma.author.findUnique({
    where: { id: params.id },
    include: { books: true },
  });

  if (!author) notFound();

  return (
    <>
      <Header entity={author} />
      {author.books.length > 0 && <Books books={author.books} />}
    </>
  );
};

export default AuthorPage;
