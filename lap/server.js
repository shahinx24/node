const express = require('express');
const mongoose = require('mongoose')
const nodemon = require('nodemon')

const app = express();
app.use(express.json())

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/student")
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}
connectDB()

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    class: String,
})

const student = mongoose.model("student", studentSchema)

app.post('/students', async (req, res) => {
    console.log("post data")
    try {
        const data = await student.create(req.body)
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

app.get('/students', async (req, res) => {
    console.log("get data")
    try {
        const data = await student.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
