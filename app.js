const fs = require("fs");

console.log("Node is running.");

fs.writeFileSync("output.txt", "Hello from Node!");

console.log("File created.");