// just use readFile (in prevoius one we used readFileSync but in Sync we don't need to mention)
const { readFile, writeFile } = require("fs");

// here we need the knowledge of call back function in JS

/*
(*) A callback is a function passed as an argument to another function
(*) This technique allows a function to call another function
(*) A callback function can run after another function has finished

// 1st function to take user input
function processUserInput(callback) {
  var name = "Kasun";
  callback(name);
}

// 2nd function to mnaipulate those data
function greeting(name) {
  console.log("Hello " + name);
}

// calling those 2 functions
processUserInput(greeting);
*/

readFile("./content/subfolder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile(
  "./content/subfolder/first.txt",
  "written by writeFile async",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  }
);
