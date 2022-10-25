const serviceUser = require('../services');
const { createToken } = require('../utils');

const HTTP_BAD_REQUEST = 400;
const HTTP_STATUS_OK = 200;

const generateTokenLogin = async (req, res) => {
  const { email, password } = req.body;
 
  const dataUser = await serviceUser.validateLogin(email, password);

  if (!dataUser) return res.status(HTTP_BAD_REQUEST).json({ message: 'Invalid fields' });

  const token = createToken(dataUser);

  res.status(HTTP_STATUS_OK).json({ token });
};

module.exports = { generateTokenLogin };