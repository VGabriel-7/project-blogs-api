const servicePost = require('../../services');

const HTTP_STATUS_OK = 200;
const HTTP_UNAUTHORIZED = 401;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    const { userId } = await servicePost.getPostById(+id);

    if (userId !== req.id) {
      return res.status(HTTP_UNAUTHORIZED).json({ message: 'Unauthorized user' });
    }

    const updated = await servicePost.updatePost({ ...req.body, id: Number(id) });

    const postUpdated = await servicePost.getPostById(updated[0]);

    res.status(HTTP_STATUS_OK).json(postUpdated);
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { updatePost };