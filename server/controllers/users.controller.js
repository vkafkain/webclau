const JWT = require('jsonwebtoken');
const { User } = require('../schemas/UserSchema');
const { hashPassword } = require('../utils/utils');
const argon2 = require('argon2');

//TODO user controllers
//TODO add validators
//TODO check http status code

exports.registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: [{ msg: 'User already exists' }] });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    const payload = {
      user: {
        id: newUser._id,
      },
    };
    const token = JWT.sign(payload, process.env.JWT_SECRET);

    //Antes la respuesta era el token, de momento la cambiamos a un mensaje
    res.status(201).send({
      status: 'ok',
      message: `User registered correctly`,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const deleteUser = await user.remove();
    res.status(200).json({ user: deleteUser, msg: 'User removed correctly' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password)
    return res
      .status(400)
      .json({ error: [{ msg: 'Content can not be empty!' }] });
  const user = await User.findOne({ email });
  if (!user)
    return res
      .status(401)
      .json({ error: [{ msg: 'Unauthorized Acces: Invalid mail/password' }] });
  const isMatch = await argon2.verify(user.password, password);
  if (isMatch) {
    const payload = {
      userId: user._id,
      email: user.email,
    };
    const accesToken = JWT.sign(payload, process.env.JWT_SECRET);

    return res.status(200).json({
      payload: payload,
      accesToken: accesToken,
      msg: 'user logged',
    });
  } else {
    return res
      .status(401)
      .json({ error: [{ msg: 'Unauthorized Acces: Invalid mail/password' }] });
  }
};

/* exports.updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
  } catch (err) {}
};
 */