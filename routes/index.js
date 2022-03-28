const express = require("express");
const router = express.Router();

router.use("/api/user", require("./auth"));
router.use("/api/posts", require("./posts"));
router.use("/api/get", require("./get"));

module.exports = router;
