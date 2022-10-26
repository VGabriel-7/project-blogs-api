const { Category } = require('../models');

const insertCategory = (name) => Category.create({ name });

module.exports = {
  insertCategory,
};