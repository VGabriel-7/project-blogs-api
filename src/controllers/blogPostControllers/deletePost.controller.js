const servicePost = require('../../services');

const HTTP_NOT_CONTENT = 204;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await servicePost.deletePost(+id);

    res.status(HTTP_NOT_CONTENT).end();
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { deletePost };