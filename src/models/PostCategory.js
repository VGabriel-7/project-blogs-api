const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      field: 'post_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_posts',
        id: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: {
      field: 'category_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        id: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  })

  PostCategory.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      as: 'categories',
      otherKey: 'categoryId',
      through: PostCategory,
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      as: 'blogposts',
      otherKey: 'postId',
      through: PostCategory,
    });
  };

  return PostCategory;
}

module.exports = PostCategoryModel;