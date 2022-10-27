const router = require('express').Router();
const { insertPost, getPosts, getPostById } = require('../controllers');
const { validateBodyInclusionPost, validateToken } = require('../middlewares');

router.use(validateToken);

router.post('/', validateBodyInclusionPost, insertPost);

router.get('/', getPosts);

router.get('/:id', getPostById);

module.exports = router;