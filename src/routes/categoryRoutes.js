const router = require('express').Router();
const { insertCategory, getCategories } = require('../controllers');
const { validateName, validateToken } = require('../middlewares');

router.use(validateToken);

router.post('/', validateName, insertCategory);

router.get('/', getCategories);

module.exports = router;