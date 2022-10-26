const {
  validateLogin,
} = require('./loginServices');

const {
  insert,
  validateEmail,
  findAll,
  findUser,
} = require('./userServices');

module.exports = {
  validateLogin,
  validateEmail,
  insert,
  findAll,
  findUser,
};