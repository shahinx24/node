const express = require('express')

const app = express()
const PORT = 3000;

let users = [];

app.use(express.json())

app.post('/users', (req, res) => {
    const { name, age, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        age,
        email,
    }

    users.push(newUser)

    res.status(201).json({
        message: "user create succufully",
        user: newUser,
    })
})

app.get('/users',(req,res)=>{
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    res.json(user)
})

app.put('users/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const { name,age,email} = req.body;

    user.name = name || user.name;
    user.age = age || user.age;
    user.email = email || user.email;

    res.json({
        message: "User updated succesfull",
        user
    })
})

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    const deleteUser = users.splice(index, 1);

    res.json({
        message: "User Deleted succesfull",
        user: deleteUser[0]
    })
})

app.listen(PORT,()=>{
    console.log(`server is live on ${PORT}`)
})