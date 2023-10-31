"use client";

import { ErrorMessage, Spinner } from "@/components/common/ui";
import FormInput from "@/components/common/ui/form/FormInput";
import { authorSchema } from "@/validators/authorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Author } from "@prisma/client";
import * as Form from "@radix-ui/react-form";
import { Button, TextArea } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type AuthorCreateData = z.infer<typeof authorSchema>;

const AuthorForm = ({ author }: { author?: Author }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorCreateData>({
    resolver: zodResolver(authorSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (author) {
        await axios
          .patch<Author>(`/api/author/${author.id}`, data)
          .then((res) => {
            router.push(`/author/${author.id}`), router.refresh();
          });
      } else {
        await axios
          .post<Author>("/api/author", data)
          .then((res) => router.push(`/author/${res.data.id}`));
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
        name="name"
        error={errors.name}
        defaultValue={author?.name}
      />
      <FormInput
        register={register}
        name="surname"
        error={errors.surname}
        defaultValue={author?.surname}
      />
      <FormInput
        register={register}
        name="biography"
        error={errors.biography}
        defaultValue={author?.biography!}
        textArea
      />
      <FormInput
        register={register}
        name="image"
        error={errors.image}
        defaultValue={author?.image!}
      />
      <Form.Field name="button">
        <Form.Submit asChild>
          <Button
            type="submit"
            className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition"
            disabled={isSubmitting}
          >
            {author ? "Update" : "Create"}
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

export default AuthorForm;
