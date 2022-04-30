const clients = [];

function getAllClients() {
  return clients;
}

function insertClient(client) {
  client.id = clients.length;
  clients.push(client);
}

function modifyClient(id, client) {
  clients[id] = client;
}

function removeClient(id) {
  clients.splice(id, 1);
  for (let index = id; index < clients.length; index++) {
    clients[index].id = clients[index].id - 1;
  }
}

exports.getAllClients = getAllClients;
exports.insertClient = insertClient;
exports.modifyClient = modifyClient;
exports.removeClient = removeClient;
