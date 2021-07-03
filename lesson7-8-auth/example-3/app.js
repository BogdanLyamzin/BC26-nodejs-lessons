const jwt = require("jsonwebtoken");

const headers = {
  alg: "HS256",
  typ: "JWT",
};

const payload = {
  id: "ghfsddfb",
};

const SECRET_KEY = "Gfsfdsdf";

const token = jwt.sign(payload, SECRET_KEY);

const decodeToken = jwt.decode(`${token}hhhh`);
console.log(decodeToken);

try {
  const result = jwt.verify(`${token}hhhh`, SECRET_KEY);
  console.log(result.id);
} catch (error) {
  console.log("Токен невалиден");
}
