const express = require("express")
const mongoose = require("mongoose")

const app = express()
 app.use(express.json())

 async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/cars")
        console.log("mongodb connect")
    }catch(error){
        console.log(error)
    }
 }
 connectDB()

 const carsSchema= new mongoose.Schema({
    name:String,
    model:Number,
    brand:String,
 })
 const cars = mongoose.model("sedan",carsSchema)

 app.post("/cars", async (req, res) => {
    console.log("POST route hit");
    try {
        const data = await cars.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.get("/cars", async (req, res) => {
    console.log("GET route hit");
    try {
        const data = await cars.find();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

 app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000")
 })
