import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

// router.get("/", ProductController.createProduct);
router.post("/", ProductController.createProduct);

export const ProductRoute = router;
