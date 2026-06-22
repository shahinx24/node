const express = require('express')

const app = express()

const myMiddleWare = (eq,res,next)=>{
    console.log('MiddleWare executed');
    next();
}

app.use(myMiddleWare);

app.get('/',(req,res)=>{
        res.send("hello node")
})

app.listen(3000,()=>{
    console.log(`Server is live on http://localhost:3000`)
})

app.post('/users', (req, res) => {
    const user = req.body;
    res.json({
        message: 'User created',
        user
    });
});

app.get('/users', (req, res) => {
    res.json(users);
});
