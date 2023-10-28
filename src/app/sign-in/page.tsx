"use client";

import { ErrorMessage } from "@/components/common/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { Button, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().min(1, "Email is required").max(150),
  password: z.string().min(1, "Password is required").max(128),
});

type SignInFormData = z.infer<typeof schema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form.Root
      className="space-y-5 bg-white px-3 py-5 rounded-lg"
      onSubmit={onSubmit}
    >
      <Form.Field name="email" className="space-y-1">
        <Form.Label>Email</Form.Label>
        <Form.Control asChild>
          <TextField.Input type="email" {...register("email")} />
        </Form.Control>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </Form.Field>
      <Form.Field name="password" className="space-y-1">
        <Form.Label>Password</Form.Label>
        <Form.Control asChild>
          <TextField.Input type="password" {...register("password")} />
        </Form.Control>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </Form.Field>
      <Form.Field name="error">
        <Form.Submit asChild>
          <Button className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition">
            Login
          </Button>
        </Form.Submit>
      </Form.Field>
    </Form.Root>
  );
};

export default SignInPage;
