import * as Form from "@radix-ui/react-form";
import { TextArea, TextField } from "@radix-ui/themes";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "..";

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
    | "username"
    | "type"
    | "title"
    | "description"
    | "cost"
    | "publisherId"
    | "authorId";
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: "text" | "email" | "password" | "number";
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
  textArea?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  register,
  error,
  type = "text",
  defaultValue,
  textArea = false,
}) => {
  return (
    <Form.Field name={name} className="space-y-1">
      <Form.Label>{name}</Form.Label>
      <Form.Control asChild>
        {textArea ? (
          <TextArea
            {...register(name)}
            name={name}
            defaultValue={defaultValue}
          />
        ) : (
          <TextField.Input
            {...register(name, { valueAsNumber: type === "number" })}
            type={type}
            name={name}
            defaultValue={defaultValue}
          />
        )}
      </Form.Control>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Form.Field>
  );
};

export default FormInput;
