import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";
import Header from "./components/Header";

interface AuthPageProps {
  params: {
    id: string;
  };
}

const AuthorPage = async ({ params }: AuthPageProps) => {
  const author = await prisma.author.findUnique({
    where: { id: params.id },
  });

  if (!author) notFound();

  return (
    <>
      <Header author={author} />
    </>
  );
};

export default AuthorPage;
