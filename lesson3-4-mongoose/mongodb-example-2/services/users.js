const { User } = require("../models");

const getAll = (filter) => {
  return User.find(filter);
};

const getById = (id) => {
  return User.findByid(id);
};

const getOne = (query) => {
  return User.findOne(query);
};

const add = async (body) => {
  try {
    const user = User.findOne({ email: body.email });
    if (user) {
      throw new Error("Such email is already exist");
    }
    return User.create(body);
    /*
    const {password, ...other} = body;
    const newUser = new User(other);
    // newUser.setPassword(password);
    return newUser.save();
    */
  } catch (error) {
    throw error;
  }
};

const update = (id, body) => {
  return User.findByIdAndUpdate(id, body);
};

const del = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  getOne,
  add,
  update,
  del,
};
