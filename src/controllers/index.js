const { generateTokenLogin } = require('./loginControllers/generateTokenLogin.controller');
const { insertUser } = require('./userConttrollers/insertUser.controller');
const { getUsers } = require('./userConttrollers/getUsers.controller');
const { getUserById } = require('./userConttrollers/getUserById.controller');
const { deleteMe } = require('./userConttrollers/deleteMe.controller');
const { insertCategory } = require('./categoryControllers/insertCategory.controller');
const { getCategories } = require('./categoryControllers/getCategories.controller');
const { insertPost } = require('./blogPostControllers/insertBlogPost.controller');
const { getPosts } = require('./blogPostControllers/getPosts.controller');
const { getPostById } = require('./blogPostControllers/getPostById.controller');
const { updatePost } = require('./blogPostControllers/updatePost.controller');
const { deletePost } = require('./blogPostControllers/deletePost.controller');
const { getPostsByQuery } = require('./blogPostControllers/getPostsByQuery.controller');

module.exports = {
  generateTokenLogin,
  insertUser,
  getUsers,
  getUserById,
  insertCategory,
  getCategories,
  insertPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  deleteMe,
  getPostsByQuery,
};