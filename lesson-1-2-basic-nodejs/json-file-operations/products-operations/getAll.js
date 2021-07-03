const fs = require("fs").promises;

const productsPath = require("./productsPath");

const getAll = async () => {
  try {
    const file = await fs.readFile(productsPath);
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = getAll;
