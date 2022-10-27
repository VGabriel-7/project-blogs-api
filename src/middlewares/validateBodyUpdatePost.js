const { bodyValidationUpdatePost } = require('./midValidations');

const HTTP_BAD_REQUEST = 400;

const validationsErrors = (err, res) => {
  if (
    err.message.includes('is not allowed')
    || err.message.includes('is required')
    ) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: 'Some required fields are missing' }); 
  }
};

const validateBodyUpdatePost = (req, res, next) => {
  const { error } = bodyValidationUpdatePost.validate(req.body);

  switch (error) {
    case undefined:
      next();
      break;
    default:
      validationsErrors(error, res);
  }
};

module.exports = validateBodyUpdatePost;