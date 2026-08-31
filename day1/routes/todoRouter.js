const express = require("express")
const router = express.Router()

const { getTodos, createTodo } = require("../controller/todoController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getTodos)
router.post("/", protect, createTodo)

module.exports = router;