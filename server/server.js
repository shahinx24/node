const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");

    const name = url.searchParams.get("name");
    const age = url.searchParams.get("age");

    res.end(`Name: ${name}, Age: ${age}`);
})

server.listen(3000, () => {
    console.log("Server is live on http://localhost:3000/User?name=YourName&age=00")
})



