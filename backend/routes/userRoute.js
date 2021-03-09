const express = require('express');
const User = require('../models/userModel');
const getToken = require('../util');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ msg: 'Invalid Email or Password' });
  }
});

router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
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
