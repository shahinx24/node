const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.writeFileSync("test.txt", "hello world")
        const data = fs.readFileSync("test.txt", "utf8")
        res.end(data)
    }
    else if (req.url === "/del") {
        fs.unlinkSync("test.txt")
        res.end("file deleted")
    }

})

server.listen(3000, () => {
    console.log("server port in http://localhost:3000")
})