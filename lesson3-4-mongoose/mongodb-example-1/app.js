const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());

const { DB_HOST, PORT = 3000 } = process.env;

const { Schema, model } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  birthday: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: [true, "Age must be exist!"],
    min: 0,
    max: 120,
  },
  status: {
    type: String,
    enum: ["work", "off"],
    default: "work",
  },
});

const User = model("user", userSchema);

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT);
    try {
      const newUser = {
        name: 43,
      };
      const result = await User.create(newUser);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // User.find({}, (error, data) => {
    //   if (error) {
    //     console.log(error);
    //     return;
    //   }
    //   console.log(data);
    // });
  })
  .catch((error) => console.log(error));
