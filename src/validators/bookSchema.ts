import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(2, "Title is required").max(20),
  publisherId: z.string().cuid("Publisher is required"),
  authorId: z.string().cuid("Author is required"),
  description: z.string().min(10, "Description is required").max(1000),
  image: z.string().url("Url is required").optional().or(z.literal("")),
  cost: z.number().min(0.01, "Cost is required"),
  type: z.enum(["AUDIOBOOK", "PAPERBACK", "EBOOK"]),
});
