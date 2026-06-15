const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to Node js")
})

app.get('/user',(req,res)=>{
    res.send("User List")
})

app.listen(3000, ()=>{
    console.log("Server is live in http://localhost:3000")
})
