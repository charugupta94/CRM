const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { customerId, amount, orderDate } = req.body;
    const order = await Order.create({ customerId, amount, orderDate });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("customerId");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrder, getOrders };
