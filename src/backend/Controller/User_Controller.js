const User = require('../Model/Usermodel');

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get a single user
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Create a new user
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

// Update a user
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// Delete a user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get a single user
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Create a new user
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

// Update a user
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// Delete a user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
