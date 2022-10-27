require('dotenv/config');
const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const findByIdCategories = async (id) => Category.findOne({ where: id, attributes: ['id'] });

const insertPost = async ({ title, content, categoryIds, id }) => {
  const t = await sequelize.transaction();

  try {
    const post = await BlogPost.create({
      title, content, userId: id,
    }, { transaction: t });

    await PostCategory.bulkCreate([
      { postId: post.id, categoryId: categoryIds[0] },
      { postId: post.id, categoryId: categoryIds[1] },
    ], { transaction: t });

    await t.commit();
    return post;
  } catch (e) {
    await t.rollback();
    return e;
  }
};

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

module.exports = {
  insertPost,
  findByIdCategories,
  getAllPost,
  getPostById,
};