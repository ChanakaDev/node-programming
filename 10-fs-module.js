// // this one is same as below
// const fs = require("fs");
// const readFileSync = fs.readFileSync;

// // so this is theshort hand way of doing above thing
// const { readFileSync } = require("fs");

const { readFileSync, writeFileSync } = require("fs");

// read data from files
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

console.log(first);
console.log(second);
/*
output:

text line from first
text line from second
*/

// write data to files
writeFileSync("./content/subfolder/first.txt", "new content written by you");
/*
new content written by you // this line has changed
text line from second
*/
