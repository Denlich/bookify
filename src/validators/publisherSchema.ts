import { z } from "zod";

export const publisherSchema = z.object({
  name: z.string().min(2, "Name is required").max(20),
  image: z.string().optional().or(z.literal("")),
  biography: z
    .string()
    .min(10, "Biography must be longer than 10 characters")
    .max(1000)
    .optional()
    .or(z.literal("")),
  books: z.array(z.string()).optional(),
});
