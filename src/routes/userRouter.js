const router = require('express').Router();
const { insertUser, getUsers } = require('../controllers');
const { validateBodyInclusion, validateToken } = require('../middlewares');

router.post('/', validateBodyInclusion, insertUser);

router.get('/', validateToken, getUsers);

module.exports = router;