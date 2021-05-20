const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const os = require("os");

const User = require("./models/user");

const app = express();
dotenv.config();

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
const productRoutes = require("./routes/product");
app.use("/api", productRoutes);

// Start server
app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log(`Listening on port 3000`);
});

// Connect to the database
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log(`Connect to database!`);
  }
);
