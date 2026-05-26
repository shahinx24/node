// create
const fs = require("fs");

fs.writeFile("demo.txt", "Hello Shahin!", (err) => {
    if (err) throw err;
    console.log("File created");
});

// read
// const fs = require("fs");

// fs.readFile("demo.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

