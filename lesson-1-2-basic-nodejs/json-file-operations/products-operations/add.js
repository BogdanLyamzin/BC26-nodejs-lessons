const { v4 } = require("uuid");

const updateFile = require("./updateFile");

const getAll = require("./getAll");

const add = async (newProduct) => {
  try {
    const products = await getAll();
    newProduct.id = v4();
    products.push(newProduct);
    await updateFile(products);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
