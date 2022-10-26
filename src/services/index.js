const {
  validateLogin,
} = require('./loginServices');

const {
  insert,
  validateEmail,
} = require('./userServices');

module.exports = {
  validateLogin,
  validateEmail,
  insert,
};