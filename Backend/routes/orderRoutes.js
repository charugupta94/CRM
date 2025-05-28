const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/orderController");

router.post("/createOrder", createOrder);
router.get("/getOrder", getOrders);

module.exports = router;
