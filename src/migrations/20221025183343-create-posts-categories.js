'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts_categories')
  }
};
