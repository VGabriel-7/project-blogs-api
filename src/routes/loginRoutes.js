const router = require('express').Router();
const { generateTokenLogin } = require('../controllers');
const { validateBodyLogin } = require('../middlewares');

router.post('/', validateBodyLogin, generateTokenLogin);

module.exports = router;