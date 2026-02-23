function display() {
    const x = document.getElementById("something").value;
    console.log(x);
}

const fs = require("fs");

console.log("Node is running.");

fs.writeFileSync("output.txt", "Hello from Node!");

console.log("File created.");