const products = require("./products");

const [, , property, value] = process.argv;
const propertyName = property.slice(2);

const filteredProducts = products.filter((item) =>
  item[propertyName].includes(value)
);
console.log(filteredProducts);
