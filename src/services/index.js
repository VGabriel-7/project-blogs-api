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

const {
  insertPost,
  findByIdCategories,
} = require('./blogPost.service');

module.exports = {
  validateLogin,
  validateEmail,
  insert,
  findAllUsers,
  findUser,
  insertCategory,
  findAllCategories,
  insertPost,
  findByIdCategories,
};