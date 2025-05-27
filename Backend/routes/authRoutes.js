const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");

const { createOrder, getOrder } = require("../controllers/orderController");

router.post("/createCustomer", createCustomer);
router.get("/getCustomer", getCustomers);
router.post("/createOrder", createOrder);
router.post("/getOrder", getOrder);

module.exports = router;
