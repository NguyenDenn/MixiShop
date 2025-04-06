import express from "express";
const app = express();
import cors from "cors";
import { ProductRoute } from "./app/modules/products/product.route";

// parse optional
app.use(express.json());
app.use(cors());

// routes
app.use("/api/products", ProductRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
