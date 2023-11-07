import { z } from "zod";

export const cartItemSchema = z.object({
  bookId: z.string().cuid(),
  quantity: z.number().int().positive(),
});
