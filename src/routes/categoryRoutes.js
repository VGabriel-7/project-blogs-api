const router = require('express').Router();
const { insertCategory } = require('../controllers');
const { validateName, validateToken } = require('../middlewares');

router.post('/', validateToken, validateName, insertCategory);

module.exports = router;