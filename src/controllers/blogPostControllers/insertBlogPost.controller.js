const postService = require('../../services');

const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const checkCategories = async (arrCategories) => {
  const promise = arrCategories.map(async (categoryId) => {
    const thisIdExist = await postService.findByIdCategories(categoryId);
    if (thisIdExist) {
      return false;
    } 
    return true;
  });
  return Promise.all(promise);
};

const insertPost = async (req, res) => {
  const { id } = req;
  const { categoryIds } = req.body;

  try {
    const categoryIdChecked = await checkCategories(categoryIds);

    if (categoryIdChecked.some((check) => check)) {
      return res.status(HTTP_BAD_REQUEST).json({ message: 'one or more "categoryIds" not found' });
    }
    const dataNewPost = await postService.insertPost({ ...req.body, id });
    res.status(HTTP_CREATED).json(dataNewPost);
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: 'deu um erro doido, meu parcero' });
  }
};

module.exports = { insertPost };