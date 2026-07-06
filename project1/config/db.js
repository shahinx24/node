const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/myDB");
        console.log("DB is live")
    }catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;