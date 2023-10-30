import React from "react";
import AuthorForm from "../components/AuthorForm";
import prisma from "../../../../../prisma/client";
import { notFound } from "next/navigation";

const UpdateAuthorPage = async ({ params }: { params: { id: string } }) => {
  const author = await prisma.author.findUnique({ where: { id: params.id } });

  if (!author) notFound();

  return <AuthorForm author={author} />;
};

export default UpdateAuthorPage;
