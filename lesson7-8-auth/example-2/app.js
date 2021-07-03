const bcrypt = require("bcryptjs");

const password = "password";

const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

console.log(hashPassword);

const compareResult = bcrypt.compareSync(password, hashPassword);
console.log(compareResult);
