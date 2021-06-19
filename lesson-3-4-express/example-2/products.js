const { v4 } = require("uuid");

const products = [
  {
    id: v4(),
    name: "iPhone X",
    price: 36000,
  },
  {
    id: v4(),
    name: "GeForce 3900",
    price: 92000,
  },
  {
    id: v4(),
    name: "Lenovo S12",
    price: 16000,
  },
];

module.exports = products;
