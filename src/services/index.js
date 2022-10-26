const { validateLogin } = require('./login.service');

const {
  insert,
  validateEmail,
  findAll,
  findUser,
} = require('./user.service');

const {
  insertCategory,
} = require('./category.service');

module.exports = {
  validateLogin,
  validateEmail,
  insert,
  findAll,
  findUser,
  insertCategory,
};