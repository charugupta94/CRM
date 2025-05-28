const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");

router.post("/createCustomer", createCustomer);
router.get("/getCustomer", getCustomers);

module.exports = router;
