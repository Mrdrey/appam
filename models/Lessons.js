// models/Lesson.js
const mongoose = require('mongoose');

// Define Lesson Schema
const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: [
    {
      phrase: { type: String, required: true },
      translation: { type: String, required: true },
      audioUrl: { type: String }, // Optional audio URL for pronunciation
    }
  ],
  category: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  createdAt: { type: Date, default: Date.now }
});

// Export the Lesson model
module.exports = mongoose.model('Lesson', lessonSchema);
