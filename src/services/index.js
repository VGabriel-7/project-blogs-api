const { validateLogin } = require('./login.service');

const {
  insert,
  validateEmail,
  findAllUsers,
  findUser,
} = require('./user.service');

const {
  insertCategory,
  findAllCategories,
} = require('./category.service');

module.exports = {
  validateLogin,
  validateEmail,
  insert,
  findAllUsers,
  findUser,
  insertCategory,
  findAllCategories,
};