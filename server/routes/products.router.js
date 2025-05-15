const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsLower50,
} = require("../controllers/products.controller");

router.get("/products", getProducts);
router.get("/products-lower-one", getProductsLower50);

module.exports = router;