const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const products = require("./products");

const { argv } = yargs(hideBin(process.argv));
console.log(argv);
const filteredProducts = products.filter((item) =>
  item.name.includes(argv.name)
);
// console.log(filteredProducts);
