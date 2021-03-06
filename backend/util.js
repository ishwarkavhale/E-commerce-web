const jwt = require('jsonwebtoken');
const config = require('config');

const getToken = (user) => {
  return jwt.sign(user, config.get('jwtSecret'), {
    expiresIn: '2h',
  });
};

module.exports = getToken;
