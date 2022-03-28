const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  OrderProduct: {
    type: Object,
    require: true,
  },
  address: {
    type: Object,
    require: true,
  },
  month: {
    type: Number,
    require: true,
  },
  date: {
    type: Number,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  uid: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("orders", orderSchema);
