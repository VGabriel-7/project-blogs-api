const {
  validateLogin,
} = require('./loginServices');

const {
  insert,
  validateEmail,
  findAll,
} = require('./userServices');

module.exports = {
  validateLogin,
  validateEmail,
  insert,
  findAll,
};