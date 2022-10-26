const router = require('express').Router();
const { insertUser, getUsers, getUserById } = require('../controllers');
const { validateBodyInclusion, validateToken } = require('../middlewares');

router.post('/', validateBodyInclusion, insertUser);

router.use(validateToken);

router.get('/', getUsers);

router.get('/:id', getUserById);

module.exports = router;