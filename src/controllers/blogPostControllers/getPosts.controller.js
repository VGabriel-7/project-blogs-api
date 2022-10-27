const servicePost = require('../../services');

const HTTP_STATUS_OK = 200;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const getPosts = async (_req, res) => {
  try {
    const posts = await servicePost.getAllPost();

    res.status(HTTP_STATUS_OK).json(posts);
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { getPosts };