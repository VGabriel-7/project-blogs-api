const { Category } = require('../models');

const insertCategory = (name) => Category.create({ name });

const findAllCategories = () => Category.findAll();

module.exports = {
  insertCategory,
  findAllCategories,
};