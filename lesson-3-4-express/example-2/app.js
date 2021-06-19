const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");

const api = require("./api");

const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

app.use(cors());
// app.use(bodyParser.json())
// app.use(express.json());

app.use("/api/v1/products", api.products);
// app.use("/api/v1/users", api.users);

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log("Server running"));
