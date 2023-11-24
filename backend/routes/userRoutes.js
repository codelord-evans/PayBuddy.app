const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration route
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: 'Your paybuddy account has been created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes for deposit, payment scheduling, balance checking, and statement viewing

module.exports = router;
