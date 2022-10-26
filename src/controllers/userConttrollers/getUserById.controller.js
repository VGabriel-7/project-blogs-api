const serviceUser = require('../../services');

const HTTP_STATUS_OK = 200;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await serviceUser.findUser(+id);

    if (!user) return res.status(HTTP_NOT_FOUND).json({ message: 'User does not exist' });

    res.status(HTTP_STATUS_OK).json(user);
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { getUserById };