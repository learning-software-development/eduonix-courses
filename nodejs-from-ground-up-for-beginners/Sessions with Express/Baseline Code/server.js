const express = require('express');
const helmet = require('helmet');
const http = require('http');
const socketio = require('socket.io');

const session = require('express-session');
const sharedsession = require('express-socket.io-session');

var messages = [];

const app = express();
app.use(helmet());

const httpServer = http.Server(app);
const io = socketio(httpServer);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));

io.on('connection', (socket) => {

  messages.forEach((message) => {
    socket.emit('message', message.name, message.msg);
  });

  socket.on('message', (name, msg) => {
    messages.push({ name: name, msg: msg });
    socket.broadcast.emit('message', name, msg);
  });

});

httpServer.listen(8080);
