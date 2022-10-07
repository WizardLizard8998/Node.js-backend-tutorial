const http = require("http");

port = 5000;

const server = http.createServer((req, resp) => {
  const url = req.url;

  if (url === "/index") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<h2>welcome to index</h2>");
  }
  else if (url === "/about") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<h2>welcome to about</h2>");
  }
  else if (url === "/contact") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<h2>welcome to contact</h2>");
  } else {
    resp.write("error");
  }

  resp.end();
});

server.listen(port, () => {
  console.log("server started");
});
