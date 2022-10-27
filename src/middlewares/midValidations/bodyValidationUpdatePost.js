const Joi = require('joi');

const bodyValidationUpdatePost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

console.log(bodyValidationUpdatePost.validate({
  content: 'The whole text for the blog post goes here in this key',
}).error.message);

module.exports = bodyValidationUpdatePost;