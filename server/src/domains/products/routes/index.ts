import { Router, Request, Response } from "express";
import { Product } from "../models/product";

const router = Router();

router.get("/api/products", async (req: Request, res: Response) => {
    const product = await Product.find();
    res.status(200).send(product)
})

export { router as indexProductRouter }

