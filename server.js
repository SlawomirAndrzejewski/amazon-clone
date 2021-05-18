const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

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
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port 3000`);
  }
});

// Connect to the database
mongoose.connect(
  "mongodb+srv://root:8uSbn21Dx825h6Uf@oneshop.m3j7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log(`Connect to database!`);
  }
);
