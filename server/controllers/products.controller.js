const {
  getAllProductsInDb,
  getProductsLowerPrice50,
} = require("../db/products.db");

const getProducts = async (req, res) => {
  const products = await getAllProductsInDb();
  res.send(products);
};

const getProductsLower50 = async (req, res) => {
  const products = await getProductsLowerPrice50();
  res.send(products);
};


module.exports = {
  getProducts,
  getProductsLower50,
};