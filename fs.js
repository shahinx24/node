// create
// const fs = require("fs");

// fs.writeFile("demo.txt", "Hello Shahin!", (err) => {
//     if (err) throw err;
//     console.log("File created");
// });

// read
// const fs = require("fs");

// fs.readFile("demo.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// adding without delete old one
// const fs = require("fs");
// fs.appendFile("demo.txt", "\nWelcome to Node.js", (err) => {
//     if (err) throw err;
//     console.log("Data added");
// });

// Rename
fs.rename("demo.txt", "sample.txt", (err) => {
    if (err) throw err;
    console.log("File renamed");
});

// Delete
// fs.unlink("sample.txt", (err) => {
//     if (err) throw err;
//     console.log("File deleted");
// });