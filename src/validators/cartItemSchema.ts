import { z } from "zod";

export const cartItemSchema = z.object({
  bookId: z.string().uuid(),
  cartId: z.string().uuid(),
  quantity: z.number().int().positive(),
});
