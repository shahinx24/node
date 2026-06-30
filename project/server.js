const express = require('express')

const app = express()
app.use(express.json())

const connectDB = require("./config/db");
const logger = require("./middleware/logger")
const userRouters = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);
connectDB()
app.use(logger)

app.get("/", (req, res) => {
    res.send("Welcome to my Project")
})

app.use("/users", userRouters)

app.listen(3000, () => {
    console.log("server is live on http://localhost:3000")
})
