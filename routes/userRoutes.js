const express = require('express');
const router = express.Router();
const { loginUser, getUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');



// @route POST /api/users/login
// @desc Login user with phone number
router.post('/login', loginUser);

// @route GET /api/users/me
// @desc Get user details
//router.get('/me', getUser);
router.get('/me', authMiddleware, getUser);

module.exports = router;

