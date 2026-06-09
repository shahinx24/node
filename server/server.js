const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Server in Created")
    res.end()
})

server.listen(3000,()=>{
    console.log("Server is live on http://localhost:3000")
})