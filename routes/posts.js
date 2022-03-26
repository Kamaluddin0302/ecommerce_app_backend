const express = require("express");
const router = express.Router();
const verify = require("../middelwares/verifyToken");
const Category = require("./../modal/Category");

router.get("/", verify, (req, res) => {
  try {
    res.send({
      posts: {
        title: "my first pet",
        description: "random data you shoud not access",
      },
    });
  } catch (error) {
    res.send({
      message: "dkmmkm",
    });
  }
});

router.post("/addCategory", async (req, res) => {
  console.log(req.body);

  const CategoryExist = await Category.findOne({
    Categoryname: req.body.Categoryname,
  });
  if (CategoryExist)
    return res.status(400).send({
      result: "error",
      message: "Category already exist",
    });

  // create new Category
  const category = new Category({
    Categoryname: req.body.Categoryname,
  });
  try {
    const savedCategory = await category.save();
    res.send({ result: "success", message: savedCategory });
  } catch (err) {
    res.status(400).send({ result: "error", message: err });
  }
});

module.exports = router;
