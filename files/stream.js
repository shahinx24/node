const fs = require('fs')

const readStream = fs.createReadStream('demo.txt', 'utf8')
const writeStream = fs.createWriteStream('copy.txt')

readStream.on('data', (chunk) => {
    console.log(chunk)
})

readStream.on('error', (err) => {
    console.log("error", err.message)
})

writeStream.on("finish", () => {
    console.log("task complted")
})

readStream.pipe(writeStream);