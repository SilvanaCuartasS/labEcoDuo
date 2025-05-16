const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsLower50,
  getProductsFilterThirty,
  getProductsLimitOffset,
  getProductsByUser,
} = require("../controllers/products.controller");

router.get("/products", getProducts);
router.get("/products-lower-one", getProductsLower50);
router.get("/products-filter-second", getProductsFilterThirty);
router.get("/products-limit-offset", getProductsLimitOffset);
router.get("/products-by-user/:id", getProductsByUser);

module.exports = router;