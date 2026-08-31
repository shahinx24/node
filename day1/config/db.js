const mongoose = require("mongoose")

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.log("Database connection failed:", error.message);
      process.exit(1);
    });
};

module.exports = connectDB;