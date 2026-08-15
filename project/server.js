const express = require('express')
const connectDB = require("./config/db")

const app = express()
connectDB()

app.get("/", (req,res) => {
    res.send("Welcome to My Project")
})

app.listen(3000, ()=>{
    console.log(`server is live on http://localhost:3000`);
})
