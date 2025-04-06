import { Request, Response } from "express";
import ProductValidationSchema from "./product.validate";
import { ProductService } from "./product.service";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParser = ProductValidationSchema.parse(req.body);
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

export const ProductController = {
  createProduct,
};
