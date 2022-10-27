const router = require('express').Router();
const { insertUser, getUsers, getUserById, deleteMe } = require('../controllers');
const { validateBodyInclusion, validateToken } = require('../middlewares');

router.post('/', validateBodyInclusion, insertUser);

router.use(validateToken);

router.get('/', getUsers);

router.get('/:id', getUserById);

router.delete('/me', deleteMe);

module.exports = router;