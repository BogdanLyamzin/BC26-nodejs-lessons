const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const api = require("./api");

const app = express();

require("./configs/passport-config.js");

app.use("/api/v1/auth", api.auth);
app.user("/api/v1/users", api.users);

app.use((_, res, __) => {
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

const { PORT = 3000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
  });
