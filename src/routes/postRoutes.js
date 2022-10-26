const router = require('express').Router();
const { insertPost } = require('../controllers');
const { validateBodyInclusionPost, validateToken } = require('../middlewares');

router.use(validateToken);

router.post('/', validateBodyInclusionPost, insertPost);

module.exports = router;