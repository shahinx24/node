// Buffer
const fs = require('fs')

fs.readFile("demo.txt", (err,data)=>{
    if(err) throw err;
    console.log(data)
})


//stream
// const fs = require('fs')

// const readStream = fs.createReadStream("demo.txt", "utf8");

// readStream.on('data', (chunk)=>{
//     console.log("chunk received")
//     console.log(chunk)
// })

// readStream.on('end', ()=>{
//     console.log("file read completed")
// })

// readStream.on("error", (err)=>{
//     console.log("error: ", err.message);
// })