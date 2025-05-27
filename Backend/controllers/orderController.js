const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).send(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createOrder };
