const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017")
    }catch (error){
        console.log(error)
    }
}
connectDB()

app.get("/",(req,res)=>{
    res.send("welcome to my project")
})
