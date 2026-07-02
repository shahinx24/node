const express = require('express')

const app = express()
app.use(express.json())

const connectDB = require("./config/db");
const logger = require("./middleware/logger")
const userRouters = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const secret = process.env.JWT_SECRET;
console.log(secret);

app.use(authRoutes);
connectDB()
app.use(logger)

app.get("/", (req, res) => {
    res.send("Welcome to my Project")
})

app.use("/users", userRouters)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is live on http://localhost:${PORT}`)
})
