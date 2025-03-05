const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  points: { type: Number, default: 0 },
});
const User=mongoose.model('User', userSchema);
module.exports = User;
