const bodyValidation = require('./validateBodyLogin');
const bodyValidtionNewUser = require('./bodyValidtionNewUser');
const nameValidation = require('./validateName');
const bodyValidtionNewPost = require('./validateBodyNewPost');

module.exports = {
  bodyValidation,
  bodyValidtionNewUser,
  nameValidation,
  bodyValidtionNewPost,
};