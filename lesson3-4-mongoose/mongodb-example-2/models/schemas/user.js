const { Schema } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name must be exist"],
    minlength: 2,
  },
  lastName: {
    type: String,
    required: [true, "Last name must be exist"],
    minlength: 2,
  },
  birthday: {
    type: String,
    required: [true, "birthday must be exist"],
    // match: /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/,
    validate: {
      validator: function (value) {
        return /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid birthday!`,
    },
  },
  email: {
    type: String,
    required: [true, "Email must be exist"],
    unique: true,
  },
});

module.exports = userSchema;
