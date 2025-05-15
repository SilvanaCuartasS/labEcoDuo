const { getAllOrdersByOrder } = require("../db/orders.db");

const getOrders = async (req, res) => {
  const orders = await getAllOrdersByOrder();
  res.send(orders);
};

module.exports = {
  getOrders,
};