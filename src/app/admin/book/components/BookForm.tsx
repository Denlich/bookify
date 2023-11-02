"use client";

import { ErrorMessage, Spinner } from "@/components/common/ui";
import FormInput from "@/components/common/ui/form/FormInput";
import { bookSchema } from "@/validators/bookSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Book } from "@prisma/client";
import * as Form from "@radix-ui/react-form";
import { Button, Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type BookCreateData = z.infer<typeof bookSchema>;

const BookForm = ({ book }: { book?: Book }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookCreateData>({
    resolver: zodResolver(bookSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (book) {
        await axios
          .patch<Book>(`/api/book/${book.id}`, { data })
          .then((res) => {
            router.push(`/book/${book.id}`);
            router.refresh();
          });
      } else {
        await axios
          .post<Book>("/api/book", data)
          .then((res) => router.push(`/book/${res.data.id}`));
      }
    } catch (error) {
      setIsSubmitting(false);
      setError("Unexpected error occurred.");
    }
  });

  return (
    <Form.Root
      onSubmit={onSubmit}
      className="bg-white rounded-xl p-5 space-y-5"
    >
      <FormInput
        register={register}
        name="title"
        error={errors.title}
        defaultValue={book?.title}
      />
      <FormInput
        register={register}
        name="description"
        error={errors.description}
        defaultValue={book?.description!}
        textArea
      />
      <FormInput
        register={register}
        name="cost"
        type="number"
        error={errors.cost}
        defaultValue={book?.cost}
      />
      <Form.Field name="type">
        <select
          defaultValue={book?.type ? book?.type : "PAPERBACK"}
          {...register("type")}
          className="border p-1 rounded-sm"
        >
          <option value="AUDIOBOOK">AUDIOBOOK</option>
          <option value="PAPERBACK">PAPERBACK</option>
          <option value="EBOOK">EBOOK</option>
        </select>
        <ErrorMessage>{errors.type?.message}</ErrorMessage>
      </Form.Field>
      <FormInput
        register={register}
        name="publisherId"
        error={errors.publisherId}
        defaultValue={book?.publisherId!}
      />
      <FormInput
        register={register}
        name="authorId"
        error={errors.authorId}
        defaultValue={book?.authorId}
      />
      <FormInput
        register={register}
        name="image"
        error={errors.image}
        defaultValue={book?.image!}
      />
      <Form.Field name="button">
        <Form.Submit asChild>
          <Button
            type="submit"
            className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition"
            disabled={isSubmitting}
          >
            {book ? "Update" : "Create"}
            {isSubmitting && <Spinner />}
          </Button>
        </Form.Submit>
      </Form.Field>
      <Form.Field name="error">
        <ErrorMessage>{error}</ErrorMessage>
      </Form.Field>
    </Form.Root>
  );
};

export default BookForm;
