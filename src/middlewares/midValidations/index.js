const bodyValidation = require('./validateBodyLogin');
const bodyValidtionNewUser = require('./bodyValidationNewUser');
const nameValidation = require('./validateName');
const bodyValidtionNewPost = require('./validateBodyNewPost');
const bodyValidationUpdatePost = require('./bodyValidationUpdatePost');

module.exports = {
  bodyValidation,
  bodyValidtionNewUser,
  nameValidation,
  bodyValidtionNewPost,
  bodyValidationUpdatePost,
};