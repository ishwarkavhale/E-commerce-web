const jwt = require('jsonwebtoken');
const config = require('config');

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.get('jwtSecret'),
    {
      expiresIn: '3600',
    }
  );
};

module.exports = getToken;
