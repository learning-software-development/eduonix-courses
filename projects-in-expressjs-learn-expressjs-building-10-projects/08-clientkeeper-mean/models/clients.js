const clients = [
  {
    first_name: "Joe",
    last_name: "Dundee",
    email: "joe.dundee@gmail.com",
    phone: "06 234 5678"
  }
];

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
