const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

const createTodo = async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title
  });

  res.status(201).json(todo);
};

module.exports = { getTodos, createTodo };