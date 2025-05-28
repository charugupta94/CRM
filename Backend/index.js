const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const customerRoute = require("./routes/customerRoutes");
const orderRoute = require("./routes/orderRoutes");
const DB = require("./config/db");
DB();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/order", orderRoute);
app.use("/api/customer", customerRoute);
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
