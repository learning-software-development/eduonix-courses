const users = [];

function initConnection(io) {

  io.sockets.on('connection', (socket) => {

    socket.on('set user', (data, callback) => {
      if (users.indexOf(data) != -1) {
        callback(false);
      } else {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsers();
      }
    });

    socket.on('disconnect', (data) => {
      if (socket.username) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsers();
      }
    });

    socket.on('send message', (data) => {
      io.sockets.emit('show message', { msg: data, user: socket.username });
    });
  });

  function updateUsers() {
    io.sockets.emit('users', users);
  }

}

exports.init = initConnection;
