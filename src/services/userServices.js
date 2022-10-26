const { User } = require('../models');

const insert = ({ displayName, email, password, image }) => {
  const user = User.create({ displayName, email, password, image });

  return user;
};

const validateEmail = async (email) => User.findOne({ where: { email } });

module.exports = {
  insert,
  validateEmail,
};