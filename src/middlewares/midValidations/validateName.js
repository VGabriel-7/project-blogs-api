const Joi = require('joi');

const nameValidation = Joi.string().required();

module.exports = nameValidation;