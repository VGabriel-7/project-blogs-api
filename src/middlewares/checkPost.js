const { getPostById } = require('../services');

const HTTP_UNAUTHORIZED = 401;
const HTTP_NOT_FOUND = 404;

const checkPostExists = async (req, res, next) => {
  const { id } = req.params;

  const post = await getPostById(+id);

  if (!post) return res.status(HTTP_NOT_FOUND).json({ message: 'Post does not exist' });

  next();
};

const checkPostOwner = async (req, res, next) => {
  const { id } = req.params;

  const { userId } = await getPostById(+id);

  if (userId !== req.id) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = { checkPostOwner, checkPostExists };