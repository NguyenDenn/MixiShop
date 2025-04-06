import { Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const VariantSchema = new Schema<TVariant>({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
});

const InventorySchema = new Schema<TInventory>({
  inStock: {
    type: Boolean,
  },
  quantity: {
    type: Number,
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
  },
  variants: [VariantSchema],
  inventory: InventorySchema,
});
