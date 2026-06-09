const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("Server is live now")
    res.end()
})

server.listen(3000,()=>{
    console.log("server is live on http://localhost:3000")
})
