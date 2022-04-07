const http = require("http");

const server = http.createServer((req, res) => {
  //   // let's explore what  are inside the req
  //   // to see this, open the webpage and refresh it. tehn console.log() will appear in the terminal
  //   console.log(req);

  // serve different content to different req urls
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  }
  if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  }
  if (req.url === "/contact") {
    res.end("<h1>Contact Us Page</h1>");
  }
  // default output for wrong web page urls
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href='/'>Home Page</a>
  `);
});

server.listen(5000);

/*
all about req
==================
(*) this is sme kind of a giant object which contains lot of infomation
(*) here we can find the 'url' proerty which is very interesting when dealing with 'http endpoints' 
*/
