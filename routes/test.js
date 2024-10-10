const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'Server is running!' });
});

router.post('/echo', (req, res) => {
  res.json({ 
    message: 'Received your POST request!',
    data: req.body 
  });
});

module.exports = router;
