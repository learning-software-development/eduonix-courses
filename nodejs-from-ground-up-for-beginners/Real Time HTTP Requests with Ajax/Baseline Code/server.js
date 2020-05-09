/*
  What you should do:

  - Bind the server on port 8080, if you do not, the AJAX requests will not work.

  - Server index.html and all the files in the 'assets' folder, using the correct mime types and the correct http
    error code if the file can't be found (you can modify the code from chapter 2's mini-project)

  - Respond to a HTTP GET request on the path '/load' and return null if a document is yet to be saved: otherwise return
    JSON in the following format:

    doc = {
        title: 'Document Title',
        body: 'Document Body';
    };

  - Respond to a HTTP POST request on the path 'save'. You should check the JSON provided is in the correct format (the
    same as the JSON object defined above), if it is not, then you should return the correct HTTP error code for a
    bad request. If it is in the correct format you should save the document to the server.

  Hints:

  - You can save the document to a variable that should be declared at the top of the code (outside of any functions).

  - Lookup the correct HTTP codes for 'Not Found' and 'Bad Request' if you can't remember them.

  - IMPORTANT: Node.js has a funny way of returning JSON from a POST request. To check a key exists in a JSON object
    from a request you can use:

    Object.prototype.hasOwnProperty.call(jsonObject, keyName);

    Using the regular: jsonObject.hasOwnProperty(keyName) will NOT work.


  Good Luck!

  - Adam
 */

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const qs = require('querystring');

const port = 8080;

let doc = null;

const server = http.createServer((request, response) => {

  if (request.method === 'GET') {

    if (request.url == '/') {
      request.url = '/index.html';
    } else if (request.url === '/load') {
      if (doc == null) {
        response.writeHead(200);
        response.end();
      } else {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(doc));
      }
    }

    let urlParts = url.parse(request.url);

    fs.readFile(urlParts.pathname.substr(1), (error, data) => {

      if (error) {
        response.writeHead(404);
        response.end();
        return;
      }

      let headers = null;
      let fileExtension = path.extname(urlParts.pathname.substr(1));

      switch (fileExtension) {
        case '.html': {
          headers = {'Content-Type' : 'text/html'};
          break;
        }
        case '.css': {
          headers = {'Content-Type' : 'text/css'};
          break;
        }
        case '.js': {
          headers = {'Content-Type' : 'text/javascript'};
          break;
        }
        case '.jpg': {
          headers = {'Content-Type' : 'image/jpeg'};
          break;
        }
        case '.ico': {
          headers = {'Content-Type' : 'image/x-icon'};
          break;
        }
        default: {
          headers = {'Content-Type' : 'application/octet-stream'};
        }
      }

      response.writeHead(200, headers);
      response.end(data);
    });

  } else if (request.method === 'POST') {

    if (request.url === '/save') {

      let body = '';

      request.on('data', (data) => {
        body = data;
      });

      request.on('end', () => {

        let postData = qs.parse(body);
        if (Object.prototype.hasOwnProperty.call(postData, 'title') && Object.prototype.hasOwnProperty.call(postData, 'body')) {
          doc = postData;
          response.writeHead(200);
          response.end();
        } else {
          response.writeHead(400);
          response.end();
        }
      });

      request.on('err', (error) => {
        console.dir(error);
      });
    }
  }
});

server.listen(port);
server.once('listening', () => {
  console.log(`Server is listening on port ${port}`);
});
