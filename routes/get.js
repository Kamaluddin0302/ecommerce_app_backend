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
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.get("/getcategory", async (req, res) => {
  try {
    const getcategory = await Category.find();

    res.send({
      posts: getcategory,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
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
      result: "error",
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
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.put("/updateproduct/:id", async (req, res) => {
  console.log(req.body);
  try {
    const getproduct = await products.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.send({
      posts: getproduct,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

module.exports = router;
