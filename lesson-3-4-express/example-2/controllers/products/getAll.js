const products = require("../../products");

const getAll = (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
};

module.exports = getAll;
