const products = require("../../products");

const del = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id === id);
  const deleteProducts = products[index];
  products.splice(index, 1);
  res.json({
    status: "success",
    code: 200,
    data: {
      result: deleteProducts,
    },
  });
};

module.exports = del;
