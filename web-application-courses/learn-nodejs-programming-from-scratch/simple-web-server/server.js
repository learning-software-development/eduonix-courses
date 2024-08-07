const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  fs.readFile('index.html', (error, data) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}).listen(1337, '127.0.0.1');

console.log("Webserver has started!");
