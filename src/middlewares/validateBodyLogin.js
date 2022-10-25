const { bodyValidation } = require('./midValidations');

const HTTP_BAD_REQUEST = 400;

const validateBodyLogin = (req, res, next) => {
  const { error } = bodyValidation.validate(req.body);

  if (error) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: 'Some required fields are missing' }); 
  }

  next();
};

module.exports = validateBodyLogin;