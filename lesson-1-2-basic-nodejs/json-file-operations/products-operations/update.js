const getAll = require("./getAll");
const updateFile = require("./updateFile");

const update = async (id, updateProduct) => {
  try {
    const products = await getAll();
    const index = products.findIndex((item) => item.id === id);
    products[index] = updateProduct;
    await updateFile(products);
    return updateProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = update;
