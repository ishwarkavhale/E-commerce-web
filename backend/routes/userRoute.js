const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const signinUser = await User.findOne({
    email: email,
    password: password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(user),
    });
  } else {
    res.status(401).send({ msg: 'Invalid Email or Password' });
  }
});

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'ishwar',
      email: 'bunnytail.outlook@gmail.com',
      password: '123321',
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.send({ msg: err.message });
  }
});

module.exports = router;
