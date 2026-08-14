const express = require("express")


const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to Login Page")
})

app.listen(3000, ()=>{
    console.log("serve is nw live on http://localhost:3000")
})