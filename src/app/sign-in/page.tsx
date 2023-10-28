"use client";

import * as Form from "@radix-ui/react-form";
import { Button, Flex, TextField } from "@radix-ui/themes";

const page = () => {
  return (
    <Form.Root className="space-y-5 bg-white px-3 py-5 rounded-lg">
      <Form.Field name="name" className="space-y-1">
        <Form.Label>Name</Form.Label>
        <Form.Control asChild>
          <TextField.Input />
        </Form.Control>
      </Form.Field>
      <Form.Field name="surname" className="space-y-1">
        <Form.Label>Surname</Form.Label>
        <Form.Control asChild>
          <TextField.Input />
        </Form.Control>
      </Form.Field>
      <Form.Field name="email" className="space-y-1">
        <Form.Label>Email</Form.Label>
        <Form.Control asChild>
          <TextField.Input />
        </Form.Control>
      </Form.Field>
      <Form.Field name="password" className="space-y-1">
        <Form.Label>Password</Form.Label>
        <Form.Control asChild>
          <TextField.Input type="password" />
        </Form.Control>
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

export default page;
