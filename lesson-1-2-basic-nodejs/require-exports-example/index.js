// CommonJS
const users = require("./users");

const users1 = require("./users");

// const getMonth = require("./getMonth");

// console.log(`Текущий месяц - ${getMonth()} по счету`);

const currentMonth = require("./getMonth")();

console.log(`Текущий месяц - ${currentMonth} по счету`);

// const { getYear } = require("./utils");
