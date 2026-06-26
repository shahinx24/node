const express = require('express')
const mongoose = require('mongoose')

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
    res.send("welcome")
})

const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    role:String,
})

const user = mongoose.model("user",userSchema)

app.post("/user", async (req,res)=>{
    console.log("POST data")
    try{
        console.log(req.body)
        const data = await user.create(req.body)
        res.status(201).json(data)
    }catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

app.get("/user", async (req,res)=>{
    console.log("GET data")
    try{
        const data = await user.create(res.body)
        res.status(201).json(data)
    }catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})


app.delete("/user", (req,res)=>{
    console.log("data deleted")
    const data = user.find(req.body)
    
})



app.listen(5000, ()=>{
    console.log("server is live http://localhost:5000")
})
