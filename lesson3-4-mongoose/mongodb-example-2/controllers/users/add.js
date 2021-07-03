const { users: service } = require("../../services");

const add = async (req, res, next) => {
  const { body } = req;
  try {
    const newUser = await service.add(body);
    if (!newUser) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Bad request",
      });
      return;
    }
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
