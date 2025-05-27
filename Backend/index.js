const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const DB = require("./config/db");
DB();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", authRoute);
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
