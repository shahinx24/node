const express = require("express")
require("dotenv").config();

const app = express()

const todoRoutes = require("./routes/todoRouter")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRouter");

app.use(express.json())
app.use("/todos", todoRoutes)
app.use("/users", userRoutes);

app.get("/", (req,res)=>{
    res.send("Welcome")
})

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
  });
});
