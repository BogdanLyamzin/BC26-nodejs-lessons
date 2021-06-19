const { json } = require("express");
const products = require("../../products");

const getOne = (req, res) => {
  const { id, name } = req.params;
  const product = products.find((item) => item.id === id);
  if (!product) {
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
      result: product,
    },
  });
};

module.exports = getOne;
