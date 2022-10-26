const categoryService = require('../../services');

const HTTP_CREATED = 201;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const insertCategory = async (req, res) => {
  try {  
    const dataNewCategory = await categoryService.insertCategory(req.body.name);
  
    res.status(HTTP_CREATED).json(dataNewCategory);
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { insertCategory };