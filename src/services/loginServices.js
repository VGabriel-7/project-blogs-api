const { User } = require('../models');

const validateLogin = async (email, password) => {
  const dataUser = await User.findOne({
    where: {
      email,
      password,
    },
  });

  return dataUser;
};

module.exports = {
  validateLogin,
};