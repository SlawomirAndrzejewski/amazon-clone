const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.json("Hello Sławomir!");
});

app.post("/", (req, res) => {
  console.log(req.body.name);
});

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
