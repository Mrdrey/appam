const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

const testRoutes = require('./routes/test');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




  mongoose.connect('mongodb://localhost/admin_user_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

app.use('/test', testRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
