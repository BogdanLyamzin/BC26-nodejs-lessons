const http = require("http");

const server = http.createServer((request, response) => {
  // console.log(`${request.url}`);
  // console.log(`${request.headers}`);
  if (request.url === "/") {
    response.write("<h2>Welcome to Home page!</h2>");
  }
  if (request.url === "/contacts") {
    response.write("<h2>Contacts page!</h2>");
  }
  response.end();
});

const { PORT = 3000 } = process.env;

server.listen(PORT);
