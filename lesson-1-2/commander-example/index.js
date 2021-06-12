const { program } = require("commander");

const products = require("./products");

program
  .option("-n, --name <type>")
  .option("-p, --price <type>")
  .option("-s, --stock");

program.parse(process.argv);
const options = program.opts();
console.log(options);
// const filteredProducts = products.filter((item) =>
//   item.name.includes(argv.name)
// );
// console.log(filteredProducts);
