const { User } = require('../models');

const insert = ({ displayName, email, password, image }) => {
  const user = User.create(
    { displayName, email, password, image },
    { attributes: { exclude: ['password'] } },
  );

  return user;
};

const validateEmail = async (email) => User.findOne({ where: { email } });

const findAllUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const findUser = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const deleteMe = (id) => User.destroy({ where: { id } });

module.exports = {
  insert,
  validateEmail,
  findAllUsers,
  findUser,
  deleteMe,
};