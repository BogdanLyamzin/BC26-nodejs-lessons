const { users: service } = require("../../services");

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await service.getById(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result: user
        }
    })
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
