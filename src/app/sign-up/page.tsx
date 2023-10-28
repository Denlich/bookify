"use client";

import { ErrorMessage, Link } from "@/components/common/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required").max(20),
  surname: z.string().min(3, "Surname is required").max(30),
  username: z.string().min(3, "Username is required").max(150),
  email: z.string().email().min(1, "Email is required").max(150),
  password: z.string().min(1, "Password is required").max(128),
});

type SignUpFormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("/api/user", data, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 201) {
      router.push("/sign-in");
    } else {
      console.error("Registration failed");
    }
  });

  return (
    <Form.Root
      className="space-y-5 bg-white px-3 py-5 rounded-lg"
      onSubmit={onSubmit}
    >
      <Form.Field name="name" className="space-y-1">
        <Form.Label>Name</Form.Label>
        <Form.Control asChild>
          <TextField.Input {...register("name")} />
        </Form.Control>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </Form.Field>
      <Form.Field name="surname" className="space-y-1">
        <Form.Label>Surname</Form.Label>
        <Form.Control asChild>
          <TextField.Input {...register("surname")} />
        </Form.Control>
        <ErrorMessage>{errors.surname?.message}</ErrorMessage>
      </Form.Field>
      <Form.Field name="username" className="space-y-1">
        <Form.Label>Username</Form.Label>
        <Form.Control asChild>
          <TextField.Input {...register("username")} />
        </Form.Control>
        <ErrorMessage>{errors.username?.message}</ErrorMessage>
      </Form.Field>
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
      <Form.Field name="link">
        <Flex align="center">
          <Text>Already have an account?</Text>
          <Link href="/sign-in">Sign In</Link>
        </Flex>
      </Form.Field>
    </Form.Root>
  );
};

export default SignUpPage;
