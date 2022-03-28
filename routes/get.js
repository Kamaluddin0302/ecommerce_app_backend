const express = require("express");
const router = express.Router();
const verify = require("../middelwares/verifyToken");
const Category = require("./../modal/Category");
const products = require("./../modal/addproduct");
const Orders = require("./../modal/addorder");

router.get("/getproduct", async (req, res) => {
  try {
    const getproduct = await products.find();

    res.send({
      posts: getproduct,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

router.get("/getcategory", async (req, res) => {
  try {
    const getcategory = await Category.find();

    res.send({
      posts: getcategory,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

router.get("/getorder", async (req, res) => {
  console.log(req.query);
  try {
    const getorder = await Orders.find(req.query);
    res.send({
      posts: getorder,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

router.put("/updateorder/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const getorder = await Orders.findOneAndUpdate(
      { _id: req.params.id },
      req.query
    );

    res.send({
      posts: getorder,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

module.exports = router;
