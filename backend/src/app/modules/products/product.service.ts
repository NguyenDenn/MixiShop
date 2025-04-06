import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductsFromDB = async (searchItem = "") => {
  const query = searchItem
    ? { name: { $regex: searchItem, $options: "i" } }
    : {};
  // truy vấn sản phẩm từ url
  const data = await Product.find(query);
  return data;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
};
