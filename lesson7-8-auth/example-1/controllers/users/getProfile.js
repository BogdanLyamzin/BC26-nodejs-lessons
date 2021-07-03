const { users: service } = require("../../services");

const getProfile = async (req, res, next) => {
  const { password, ...userInfo } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      result: userInfo,
    },
  });
};

module.exports = getProfile;
