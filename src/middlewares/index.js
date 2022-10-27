const validateBodyLogin = require('./validateBodyLogin');
const validateBodyInclusion = require('./validateBodyInclusion');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateBodyInclusionPost = require('./validateBodyInclusionPost');
const validateBodyUpdatePost = require('./validateBodyUpdatePost');
const { checkPostOwner, checkPostExists } = require('./checkPost');

module.exports = {
  validateBodyLogin,
  validateBodyInclusion,
  validateToken,
  validateName,
  validateBodyInclusionPost,
  validateBodyUpdatePost,
  checkPostOwner,
  checkPostExists,
};