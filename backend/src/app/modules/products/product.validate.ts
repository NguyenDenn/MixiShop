import { z } from "zod";

export const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export const inventoryValidationSchema = z.object({
  quantity: z.number().positive(),
  inStock: z.boolean(),
});

export const ProductValidationSchema = z.object({
  name: z.string({
    required_error: "Product name is required",
    invalid_type_error: "Product name must be a string",
  }),
  description: z.string(),
  price: z.number().positive(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: z.array(inventoryValidationSchema),
});
