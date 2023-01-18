const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('Users', userSchema);

module.exports = { User };
