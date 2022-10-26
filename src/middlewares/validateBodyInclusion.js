const { bodyValidtionNewUser } = require('./midValidations');

const HTTP_BAD_REQUEST = 400;

const validationsErrors = (err, res) => {
  if (err.message.includes('length must be at least 8')) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: '"displayName" length must be at least 8 characters long' }); 
  }
  if (err.message.includes('email')) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: '"email" must be a valid email' });
  }
  if (err.message.includes('length must be at least 6')) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: '"password" length must be at least 6 characters long' });
  }
};

const validateBodyInclusion = (req, res, next) => {
  const { error } = bodyValidtionNewUser.validate(req.body);

  switch (error) {
    case undefined:
      next();
      break;
    default:
      validationsErrors(error, res);
  }
};

module.exports = validateBodyInclusion;