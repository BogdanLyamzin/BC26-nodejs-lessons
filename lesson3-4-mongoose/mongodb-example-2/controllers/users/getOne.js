const { users: service } = require("../../services");
// /users?email=
const getOne = async (req, res, next) => {
  const { query } = req;
  try {
    const user = await service.getOne(query);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: user,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getOne;
