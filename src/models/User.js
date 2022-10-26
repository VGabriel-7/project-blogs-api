const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false
  })

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      foreignKey: 'userId', as: 'blogposts',
    });
  };

  return User;
}

module.exports = userModel;