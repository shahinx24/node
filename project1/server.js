const express = require("express")
const mongoose = require("mongoose")
const userRouters = require("./routes/userRoutes")

const app = express()
app.use(express.json())

const connectDB = require("./config/db")

connectDB()

app.get("/",(req,res)=>{
    res.send("Welcome To Ui")
})

app.use("/users", userRouters)

app.listen(5000, ()=>{
    console.log("server is live on http://localhost:5000")
})