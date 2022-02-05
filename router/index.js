const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  return res.send("Welcome to Data Line Test");
});

router.use("/api/v1/auth", require("./Auth.routes"));
router.use("/api/v1/products", require("./Product.routes"));
router.use("/api/v1/categories", require("./Category.routes"));

module.exports = router;
