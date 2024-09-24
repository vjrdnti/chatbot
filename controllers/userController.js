// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Dummy user data (for testing purposes)
const users = [
  {
    id: 1,
    phoneNumber: '1234567899',
    token: 'dummyToken1234567890', // For testing, in reality, generate a JWT token
  },
];

// Login user function
const loginUser = async (req, res) => {
  const { phoneNumber } = req.body;

  // Simulate user lookup
  let user = await User.findOne({ phoneNumber });

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  // Return user data with token
  res.json({
    id: user._id,
    phoneNumber: user.phoneNumber,
    token: user.token, // In reality, generate a JWT token
  });
};

// Get user profile function (protected)
const getUser = async (req, res) => {
  //console.log(req.rawHeaders[3]);
  const user = await User.findOne({token: req.rawHeaders[3]});
  res.json({
    id: user.id,
    phoneNumber: user.phoneNumber,
  });
};

module.exports = { loginUser, getUser };

