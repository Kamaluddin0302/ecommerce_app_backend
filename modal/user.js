const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 1,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 255,
    min: 1,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema);
