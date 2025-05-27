const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    phone: String,
    totalSpend: Number,
    lastVisited: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
