const { User } = require('../models');

const validateLogin = async (email, password) => {
  const dataUser = await User.findOne({
    where: {
      email,
      password,
    },
    attributes: { exclude: ['password'] },
  });

  return dataUser;
};

module.exports = {
  validateLogin,
};