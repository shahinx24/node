const https = require('https');

const server = http.createServer((req, res)=> {
    res.write("Node.js server is Running ");
    res.end();
});

server.listen(3000,)