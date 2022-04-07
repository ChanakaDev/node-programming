// *** This is a very important module in Node ***
// (*) helts to setup a web server
// (*) we use express also with this (this package provide abstraction)

// (01) import the http package
const http = require("http");

// (02) setup a web server
const server = http.createServer((req, res) => {
  // write something to the webpage in node.js
  res.write("<h1>Welcome to our home page</h1>");
  res.end();
});
// req <-- incoming request from client
// res <-- what we are sending back

// (03) assign a port number
server.listen(5000);

// *** important! : if you need to see the output, open the web-browser and type localhost:5000 and
// hit enter(windows)/ return(mac)
