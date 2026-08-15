const express = require("express")
const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/myDB")
    }catch(error){
        console.log(error)
    }
}

const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to Login Page")
})

app.listen(3000, ()=>{
    console.log("serve is nw live on http://localhost:3000")
})