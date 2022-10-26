const Jwt = require('../utils');

const HTTP_UNAUTHORIZED = 401;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token not found' });
  }
  try {
    Jwt.validateToken(authorization);

    next();
  } catch ({ message }) {
    return res.status(HTTP_UNAUTHORIZED).json({ message });
  }
};

module.exports = validateToken;