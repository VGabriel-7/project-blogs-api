const { generateTokenLogin } = require('./loginControllers/generateTokenLogin.controller');
const { insertUser } = require('./userConttrollers/insertUser.controller');
const { getUsers } = require('./userConttrollers/getUsers.controller');
const { getUserById } = require('./userConttrollers/getUserById.controller');
const { insertCategory } = require('./categoryControllers/insertCategory.controller');
const { getCategories } = require('./categoryControllers/getCategories.controller');
const { insertPost } = require('./blogPostControllers/insertBlogPost.controller');

module.exports = {
  generateTokenLogin,
  insertUser,
  getUsers,
  getUserById,
  insertCategory,
  getCategories,
  insertPost,
};