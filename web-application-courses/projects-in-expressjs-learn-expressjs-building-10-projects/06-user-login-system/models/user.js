const bcrypt = require('bcryptjs');

class UserModel {
  id = -1;
  name = '';
  username = '';
  email = '';
  password = '';

  constructor() { }
};

const users = [];

function createUser(user) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(user.password, salt);

  let newUser = new UserModel();
  newUser.id = users.length;
  newUser.name = user.name;
  newUser.username = user.username;
  newUser.email = user.email;
  newUser.password = hash;

  users.push(newUser);
}

function getUserByUsername(credentials) {
  for (let index = 0; index < users.length; index++) {
    if (users[index].username === credentials.username) {
      users[index].id = index;
      return users[index];
    }
  }
  return null;
}

function findUserById(id) {
  if (id < 0 || id >= users.length) return null;
  return users[id];
}

function comparePassword(candidatePassword, hash) {
  return bcrypt.compareSync(candidatePassword, hash);
}

exports.createUser = createUser;
exports.getUserByUsername = getUserByUsername;
exports.findUserById = findUserById;
exports.comparePassword = comparePassword;
