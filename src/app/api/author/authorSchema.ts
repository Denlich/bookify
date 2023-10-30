import { z } from "zod";

export const authorSchema = z.object({
  name: z.string().min(2, "Name is required").max(20),
  surname: z.string().min(3, "Surname is required").max(30),
  image: z.string().optional(),
  biography: z.string().min(10, "Biography is required").max(500).optional(),
  books: z.array(z.string()).optional(),
});
