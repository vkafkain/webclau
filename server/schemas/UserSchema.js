const mongoose = require('mongoose');
const Joi = require('joi');

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

const validateUser = (user) => {
  const schema = Joi.object({
    userName: Joi.string().required().min(3).max(255),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(1024),
  });
  return schema.validate(user);
};

const User = mongoose.model('Users', userSchema);

module.exports = { User, validateUser };
