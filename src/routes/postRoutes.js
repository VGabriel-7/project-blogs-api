const router = require('express').Router();
const {
  insertPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers');
const {
  validateBodyInclusionPost,
  validateToken,
  validateBodyUpdatePost, 
  checkPostOwner,
  checkPostExists } = require('../middlewares');

router.use(validateToken);

router.post('/', validateBodyInclusionPost, insertPost);

router.get('/', getPosts);

router.get('/:id', getPostById);

router.put('/:id', validateBodyUpdatePost, checkPostOwner, updatePost);

router.delete('/:id', validateToken, checkPostExists, checkPostOwner, deletePost);

module.exports = router;