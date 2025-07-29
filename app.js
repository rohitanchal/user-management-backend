const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth-routes"));
app.use("/api/users", require("./routes/user-routes"));

// Connect DB and Start Server
connectDB().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
