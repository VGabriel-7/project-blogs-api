const router = require('express').Router();
const { insertPost, getPosts, getPostById, updatePost } = require('../controllers');
const {
  validateBodyInclusionPost,
  validateToken,
  validateBodyUpdatePost } = require('../middlewares');

router.use(validateToken);

router.post('/', validateBodyInclusionPost, insertPost);

router.get('/', getPosts);

router.get('/:id', getPostById);

router.put('/:id', validateBodyUpdatePost, updatePost);

module.exports = router;