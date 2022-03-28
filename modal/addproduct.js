const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Product_Name: {
    type: String,
    require: true,
  },
  Product_ShotDetail: {
    type: String,
    require: true,
  },
  Product_Price: {
    type: String,
    require: true,
  },
  Product_Catagery: {
    type: String,
    require: true,
  },
  Product_Full_Detail: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", productSchema);
