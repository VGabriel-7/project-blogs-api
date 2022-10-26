const { bodyValidtionNewPost } = require('./midValidations');

const HTTP_BAD_REQUEST = 400;

const validationsErrors = (err, res) => {
  if (
    err.message.includes('is required')
    || err.message.includes('is not allowed')
    ) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: 'Some required fields are missing' }); 
  }
};

const validateBodyInclusion = (req, res, next) => {
  const { error } = bodyValidtionNewPost.validate(req.body);

  switch (error) {
    case undefined:
      next();
      break;
    default:
      validationsErrors(error, res);
  }
};

module.exports = validateBodyInclusion;