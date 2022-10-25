const Joi = require('joi');

const bodyValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = bodyValidation;