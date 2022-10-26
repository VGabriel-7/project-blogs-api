const { generateTokenLogin } = require('./generateTokenLogin.controller');
const { insertUser } = require('./insertUser.controller');
const { getUsers } = require('./getUsers.controller');
const { getUserById } = require('./getUserById.controller');

module.exports = {
  generateTokenLogin,
  insertUser,
  getUsers,
  getUserById,
};