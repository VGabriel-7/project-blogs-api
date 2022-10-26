const { generateTokenLogin } = require('./generateTokenLogin.controller');
const { insertUser } = require('./insertUser.controller');
const { getUsers } = require('./getUsers.controller');

module.exports = {
  generateTokenLogin,
  insertUser,
  getUsers,
};