// middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Simulate token verification (In real life, use jwt.verify)
    if (token === 'dummyToken1234567890') {
      next(); // Token is valid
    } else {
      return res.status(401).json({ message: 'Token is not valid' });
    }
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;

