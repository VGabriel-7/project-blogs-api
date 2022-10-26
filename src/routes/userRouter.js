const router = require('express').Router();
const { insertUser } = require('../controllers');
const { validateBodyInclusion } = require('../middlewares');

router.post('/', validateBodyInclusion, insertUser);

module.exports = router;