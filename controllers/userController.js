// controllers/userController.js

// Dummy user data (for testing purposes)
const users = [
  {
    id: 1,
    phoneNumber: '1234567899',
    token: 'dummyToken1234567890', // For testing, in reality, generate a JWT token
  },
];

// Login user function
const loginUser = (req, res) => {
  const { phoneNumber } = req.body;

  // Simulate user lookup
  const user = users.find((u) => u.phoneNumber === phoneNumber);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  // Return user data with token
  res.json({
    id: user.id,
    phoneNumber: user.phoneNumber,
    token: user.token, // In reality, generate a JWT token
  });
};

// Get user profile function (protected)
const getUser = (req, res) => {
  const user = users[0]; // Assuming user is authenticated and present in DB

  res.json({
    id: user.id,
    phoneNumber: user.phoneNumber,
  });
};

module.exports = { loginUser, getUser };

