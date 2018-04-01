const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((request, response) => {
  response.statusCode = 418;
  response.setHeader('Content-Type', 'text/plain');
  response.end('I\'m a teapot.');
});

server.listen(PORT);
