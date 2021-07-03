const getAll = require("./getAll");
const updateFile = require("./updateFile");

const del = async (id) => {
  try {
    const products = await getAll();
    const newProducts = products.filter((item) => item.id !== id);
    console.log(newProducts);
    await updateFile(newProducts);
    return newProducts;
  } catch (error) {
    throw error;
  }
};

module.exports = del;
