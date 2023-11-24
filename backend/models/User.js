const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  psswd: { type: String, required: true },
  // Add more fields as needed for user details
});

const User = mongoose.model('User', userSchema);

module.exports = User;
