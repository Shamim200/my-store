import { Router } from "express";

import {
  addProducts,
  getAllProducts,
  getProductsById,
  modifyProducts,
  removeProducts,
} from "../controllers/product.controller.js";

const router = Router();
router.route("/add-products").post(addProducts);
router.route("/get-products").get(getAllProducts);
router.route("/get-produt/:id").get(getProductsById);
router.route("/modify-products").patch(modifyProducts);
router.route("/remove-products").delete(removeProducts);

export default router;
