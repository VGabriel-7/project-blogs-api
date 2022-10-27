const { validateLogin } = require('./login.service');

const {
  insert,
  validateEmail,
  findAllUsers,
  findUser,
  deleteMe,
} = require('./user.service');

const {
  insertCategory,
  findAllCategories,
} = require('./category.service');

const {
  insertPost,
  findByIdCategories,
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
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
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
  deleteMe,
};