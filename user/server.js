const express = require('express');

const app = express();

app.use(express.json());

const users = [];

app.get('/', (req, res) => {
    res.send("Welcome to Node js");
});

app.post('/user', (req, res) => {
    const { name, email, age } = req.body;

    const user = {
        id: Date.now(),
        name,
        email,
        age
    };

    users.push(user);

    res.status(201).json({
        message: "User created successfully",
        user
    });
});

app.get('/user', (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server is live at http://localhost:3000");
});