const http = require("http");

const server = http.createServer((req, res) => {
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Test</title></head>");
  res.write("<body><h1>Test</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
