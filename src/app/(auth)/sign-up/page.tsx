"use client";

import { Link } from "@/components/common/ui";
import FormInput from "@/components/common/ui/form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { Button, Flex, Text } from "@radix-ui/themes";
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
      <FormInput register={register} name="name" error={errors.name} />
      <FormInput register={register} name="surname" error={errors.surname} />
      <FormInput register={register} name="username" error={errors.username} />
      <FormInput
        register={register}
        name="email"
        error={errors.email}
        type="email"
      />
      <FormInput
        register={register}
        name="password"
        error={errors.password}
        type="password"
      />
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
