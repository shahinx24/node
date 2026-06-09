const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.writeFile('file.txt', "hello node.js", (err) => {
            if (err) throw err;
            const data = fs.readFileSync('file.txt', 'utf8')
            res.end(data)
        })
    } else if (req.url === '/del') {
        fs.unlink('file.txt', () => {
            console.log("file deleted")
        })
    }
})

server.listen(3000, () => {
    console.log('server is ve on http://localhost:3000')
})