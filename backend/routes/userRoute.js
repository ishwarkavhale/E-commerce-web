const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

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
