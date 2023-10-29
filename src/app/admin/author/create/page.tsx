"use client";

import * as Form from "@radix-ui/react-form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/common/ui/form/FormInput";
import { Button } from "@radix-ui/themes";

const authorSchema = z.object({
  name: z.string().min(2, "Name is required").max(20),
  surname: z.string().min(3, "Surname is required").max(30),
  image: z.string().optional(),
  biography: z
    .string()
    .min(10, "Biography must be longer than 10 characters")
    .max(500)
    .optional()
    .or(z.literal("")),
});

type AuthorCreateData = z.infer<typeof authorSchema>;

const AuthorCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorCreateData>({
    resolver: zodResolver(authorSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form.Root
      onSubmit={onSubmit}
      className="bg-white rounded-xl p-5 space-y-5"
    >
      <FormInput register={register} name="name" error={errors.name} />
      <FormInput register={register} name="surname" error={errors.surname} />
      <FormInput register={register} name="biography" />
      <Form.Field name="button">
        <Form.Submit asChild>
          <Button
            type="submit"
            className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition"
          >
            Create
          </Button>
        </Form.Submit>
      </Form.Field>
    </Form.Root>
  );
};

export default AuthorCreate;
