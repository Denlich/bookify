import { z } from "zod";

export const authorSchema = z.object({
  name: z.string().min(2, "Name is required").max(20),
  surname: z.string().min(3, "Surname is required").max(30),
  image: z.string().optional().or(z.literal("")),
  biography: z
    .string()
    .min(10, "Biography must be longer than 10 characters")
    .max(1000)
    .optional()
    .or(z.literal("")),
  books: z.array(z.string()).optional(),
});
