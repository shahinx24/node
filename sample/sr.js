const express = require("express")
const mongoose = require("mongoose")

const app = express()
  app.use(express.json())

  async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/cars")
        console.log("mongoDB connect")
    }catch(error){
        console.log(error)
    }
  }