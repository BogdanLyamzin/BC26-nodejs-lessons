const { users: service } = require("../../services");
// users?birthday="03-02-2000"
const getAll = async (req, res, next) => {
  const { query } = req;
  /*
  {
      birthday: "03-02-2000"
  }
  */
  try {
    const result = await service.getAll(query);
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    // error.code = 501
    // error.message = "No database connect"
    next(error);
  }
};

module.exports = getAll;
