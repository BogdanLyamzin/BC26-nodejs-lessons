const fs = require("fs").promises;

const productsPath = require("./productsPath");

const updateFile = async (newProducts) => {
  const productsStr = JSON.stringify(newProducts);
  await fs.writeFile(productsPath, productsStr);
};

module.exports = updateFile;
