const express = require('express');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/users', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = router;