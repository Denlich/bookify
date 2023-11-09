"use client";

import { ErrorMessage, Link } from "@/components/common/ui";
import FormInput from "@/components/common/ui/form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { Button, Flex, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SocialButton from "../components/SocialButton";

const schema = z.object({
  email: z.string().email().min(1, "Email is required").max(150),
  password: z.string().min(1, "Password is required").max(128),
});

type SignInFormData = z.infer<typeof schema>;

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
  });

  const [error, setError] = useState("");

  const onSubmit = async (data: SignInFormData) => {
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (signInData?.error) {
      setError("Email or password is incorrect");
    } else {
      router.refresh();
      router.push("/");
    }
  };

  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000" });

  return (
    <Form.Root
      className="space-y-5 bg-white px-3 py-5 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <Form.Field name="button">
        <Form.Submit asChild>
          <Button className="w-full hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition">
            Login
          </Button>
        </Form.Submit>
      </Form.Field>
      <Form.Field name="social">
        <SocialButton type="button" onClick={loginWithGoogle} />
      </Form.Field>
      <Form.Field name="link">
        <Flex align="center">
          <Text>Don&apos;t have an account?</Text>
          <Link href="/sign-up">Sign Up</Link>
        </Flex>
      </Form.Field>
      <Form.Field name="error">
        <ErrorMessage>{error}</ErrorMessage>
      </Form.Field>
    </Form.Root>
  );
};

export default SignInPage;
