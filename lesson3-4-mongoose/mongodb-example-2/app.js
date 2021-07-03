const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const api = require("./api");

const app = express();

app.use(cors());

app.use("/api/v1/users", api.users);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = "Server error" } = error;
  res.status(code).json({
    status: "fail",
    code,
    message,
  });
});

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT);
  })
  .catch((error) => console.log(error));
