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
    | `books.${number}`;
  register: UseFormRegister<{
    name: string;
    surname: string;
    image?: string | undefined;
    biography?: string | undefined;
    books?: string[] | undefined;
  }>;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({ name, register, error }) => {
  return (
    <Form.Field name={name} className="space-y-1">
      <Form.Label>{name}</Form.Label>
      <Form.Control asChild>
        <TextField.Input {...register(name)} />
      </Form.Control>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Form.Field>
  );
};

export default FormInput;
