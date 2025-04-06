import { Request, Response } from "express";
import ProductValidationSchema from "./product.validate";
import { ProductService } from "./product.service";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParser = ProductValidationSchema.parse(req.body);
    // xác thực dữ liệu bằng ProductValidationSchme
    const result = await ProductService.createProductIntoDB(zodParser);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
      error: error,
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    // const result = await ProductService.getAllProductsFromDB();
    const { searchItem } = req.query;
    const result = await ProductService.getProductsFromDB(searchItem as string);
    res.status(200).json({
      success: true,
      message: "Get All Product successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
      error: error,
    });
  }
};

export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Get Single Product successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
