const servicePost = require('../../services');

const HTTP_STATUS_OK = 200;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await servicePost.getPostById(+id);

    if (!post) return res.status(HTTP_NOT_FOUND).json({ message: 'Post does not exist' });

    res.status(HTTP_STATUS_OK).json(post);
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { getPostById };