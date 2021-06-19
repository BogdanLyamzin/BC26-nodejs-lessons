const products = require("../../products");

const { productSchema } = require("../../utils/validateSchemas");

const update = (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      status: "error",
      code: 404,
      message: error.message,
    });
    return;
  }
  const { id } = req.params;
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
    return;
  }
  products[index] = { ...req.body, id };
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products[index],
    },
  });
};

module.exports = update;
