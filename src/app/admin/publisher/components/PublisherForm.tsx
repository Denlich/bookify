"use client";

import { ErrorMessage, Spinner } from "@/components/common/ui";
import FormInput from "@/components/common/ui/form/FormInput";
import { publisherSchema } from "@/validators/publisherSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Publisher } from "@prisma/client";
import * as Form from "@radix-ui/react-form";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type PublisherCreateData = z.infer<typeof publisherSchema>;

const PublisherForm = ({ publisher }: { publisher?: Publisher }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PublisherCreateData>({
    resolver: zodResolver(publisherSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (publisher) {
        await axios
          .patch<Publisher>(`/api/publisher/${publisher.id}`, data)
          .then((res) => {
            router.push(`/publisher/${publisher.id}`), router.refresh();
          });
      } else {
        await axios
          .post<Publisher>("/api/publisher", data)
          .then((res) => router.push(`/publisher/${res.data.id}`));
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
        defaultValue={publisher?.name}
      />
      <FormInput
        register={register}
        name="biography"
        error={errors.biography}
        defaultValue={publisher?.biography!}
        textArea
      />
      <FormInput
        register={register}
        name="image"
        error={errors.image}
        defaultValue={publisher?.image!}
      />
      <Form.Field name="button">
        <Form.Submit asChild>
          <Button
            type="submit"
            className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition"
            disabled={isSubmitting}
          >
            {publisher ? "Update" : "Create"}
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

export default PublisherForm;
