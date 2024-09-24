const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
  },
  // Add other fields if needed
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);


