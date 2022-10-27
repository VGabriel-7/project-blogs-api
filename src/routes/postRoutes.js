const router = require('express').Router();
const { insertPost, getPosts } = require('../controllers');
const { validateBodyInclusionPost, validateToken } = require('../middlewares');

router.use(validateToken);

router.post('/', validateBodyInclusionPost, insertPost);

router.get('/', getPosts);

module.exports = router;