const express = require("express")
const router = require("./routes/userRoutes")
const connectDB = require("./db/db")

const app = express()
app.use(express.json())
connectDB()

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/users", router)

app.listen(3000, ()=>{
    console.log("server is live on http://localhost:3000 ")
})
