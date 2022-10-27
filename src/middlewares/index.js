const validateBodyLogin = require('./validateBodyLogin');
const validateBodyInclusion = require('./validateBodyInclusion');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateBodyInclusionPost = require('./validateBodyInclusionPost');
const validateBodyUpdatePost = require('./validateBodyUpdatePost');

module.exports = {
  validateBodyLogin,
  validateBodyInclusion,
  validateToken,
  validateName,
  validateBodyInclusionPost,
  validateBodyUpdatePost,
};