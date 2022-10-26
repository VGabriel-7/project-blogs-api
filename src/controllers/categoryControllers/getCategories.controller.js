const serviceCategory = require('../../services');

const HTTP_STATUS_OK = 200;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const getCategories = async (_req, res) => {
  try {
    const users = await serviceCategory.findAllCategories();

    res.status(HTTP_STATUS_OK).json(users);
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { getCategories };