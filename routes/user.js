const express = require('express');
const User = require('../models/User');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
});


router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.user.username },
      { name: req.body.name, bio: req.body.bio },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).send('Error updating profile');
  }
});

module.exports = router;
