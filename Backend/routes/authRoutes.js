const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");

const { createOrder } = require("../controllers/orderController");

router.post("/createCustomer", createCustomer);
router.get("/get", getCustomers);
router.post("/createOrder", createOrder);

module.exports = router;
