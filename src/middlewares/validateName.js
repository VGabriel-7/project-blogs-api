const { nameValidation } = require('./midValidations');

const HTTP_BAD_REQUEST = 400;

const validateName = (req, res, next) => {
  const { error } = nameValidation.validate(req.body.name);

  if (error) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: '"name" is required' }); 
  }

  next();
};

module.exports = validateName;