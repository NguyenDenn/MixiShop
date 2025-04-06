import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const VariantSchema = new Schema<TVariant>(
  {
    type: String,
    value: String,
  },
  { _id: false }
);
const InventorySchema = new Schema<TInventory>(
  {
    quantity: Number,
    inStock: Boolean,
  },
  { _id: false }
);

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
export const Product = model("Product", productSchema);
//Dòng mã này tạo ra một mô hình Product để tương tác với collection products trong MongoDB
