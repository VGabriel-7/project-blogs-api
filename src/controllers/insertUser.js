const userService = require('../services');
const { createToken } = require('../utils');

const HTTP_CREATED = 201;
const HTTP_CONFLICT = 409;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const insertUser = async (req, res) => {
  try {
    const verifyEmail = await userService.validateEmail(req.body.email);
  
    if (verifyEmail) return res.status(HTTP_CONFLICT).json({ message: 'User already registered' });
  
    const dataNewUser = await userService.insert(req.body);
    
    const token = createToken(dataNewUser);
  
    res.status(HTTP_CREATED).json({ token });
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = { insertUser };