//creating server
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home page");
  } 
  else if (req.url === "/about") {
    res.end("this is about");
  } 
  else {
    res.end(`<h1>OOps</h1>
  <p1>page not found</p1>
  <a href="/">back to home</a>
  `);
  }
});

server.listen(5000);