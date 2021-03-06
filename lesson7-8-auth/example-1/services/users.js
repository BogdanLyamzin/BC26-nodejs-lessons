const { User } = require("../models");

const getOne = (filter) => {
  return User.findOne(filter);
};

const add = ({ password, ...data }) => {
  const newUser = new User(data);
  newUser.setPassword(password);
  return newUser.save();
};

const findById = (id) => {
  return User.findById(id);
};

const update = (id, user) => {
  return User.FindByIdAndUpdate(id, user);
};

module.exports = {
  getOne,
  add,
  findById,
  update
};
