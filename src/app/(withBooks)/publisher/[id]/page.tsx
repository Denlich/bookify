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

const PublisherPage = async ({ params }: AuthPageProps) => {
  const publisher = await prisma.publisher.findUnique({
    where: { id: params.id },
    include: { books: true },
  });

  if (!publisher) notFound();

  return (
    <>
      <Header entity={publisher} />
      {publisher.books.length > 0 && <Books books={publisher.books} />}
    </>
  );
};

export default PublisherPage;
