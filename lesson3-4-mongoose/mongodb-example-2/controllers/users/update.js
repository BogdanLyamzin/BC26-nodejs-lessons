const { users: service } = require("../../services");

const update = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const updateUser = await service.update(id, body);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: updateUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
