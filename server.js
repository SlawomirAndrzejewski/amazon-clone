const express = require("express")
const morgan = require("morgan")

const app = express()

// Middleware
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// API routes
app.get("/", (req, res) => {
    res.json("Hello Sławomir!")
})

app.post("/", (req, res) => {
    console.log(req.body.name);
})

app.listen(3000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Listening on port 3000`);
    }
})