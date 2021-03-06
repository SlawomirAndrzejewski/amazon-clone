const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

const app = express();
dotenv.config();

app.use(cors());

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
const productRoute = require("./routes/product");
app.use("/api", productRoute);

const categoryRoute = require("./routes/category");
app.use("/api", categoryRoute);

const ownersRoute = require("./routes/owner");
app.use("/api", ownersRoute);

// Start server
// const PORT = 2000;

app.listen(2000, (err) => {
  if (err) console.log(err);
  else console.log(`Listening on port 2000`);
});

// Connect to the database !
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log(`Connect to database!`);
  }
);
