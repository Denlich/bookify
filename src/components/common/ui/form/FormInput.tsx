import * as Form from "@radix-ui/react-form";
import { TextField } from "@radix-ui/themes";
import { ErrorMessage } from "..";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  name:
    | "name"
    | "surname"
    | "image"
    | "biography"
    | "books"
    | `books.${number}`
    | "email"
    | "password"
    | "username";
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: "text" | "email" | "password";
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  register,
  error,
  type = "text",
}) => {
  return (
    <Form.Field name={name} className="space-y-1">
      <Form.Label>{name}</Form.Label>
      <Form.Control asChild>
        <TextField.Input {...register(name)} type={type} />
      </Form.Control>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Form.Field>
  );
};

export default FormInput;
