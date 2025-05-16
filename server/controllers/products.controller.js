const {
  getAllProductsInDb,
  getProductsLowerPrice50,
  getProductsFilterPrice30,
  getAllProductsLimit,
  getAllProductsByUser,
} = require("../db/products.db");

const getProducts = async (req, res) => {
  const products = await getAllProductsInDb();
  res.send(products);
};

const getProductsLower50 = async (req, res) => {
  const products = await getProductsLowerPrice50();
  res.send(products);
};

const getProductsFilterThirty = async (req, res) => {
  const products = await getProductsFilterPrice30();
  res.send(products);
};

const getProductsLimitOffset = async (req, res) => {
  const products = await getAllProductsLimit();
  res.send(products);
};

const getProductsByUser = async (req, res) => {
  const { id: userId } = req.params;
  const products = await getAllProductsByUser(userId);
  res.send(products);
};


module.exports = {
  getProducts,
  getProductsLower50,
  getProductsFilterThirty,
  getProductsLimitOffset,
  getProductsByUser,
};