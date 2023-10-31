import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(2, "Title is required").max(20),
  publisherId: z.string().cuid("Publisher is required"),
  authors: z.array(z.string().cuid("Author is required")),
});
