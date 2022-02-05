const express = require("express");

const {
  getCategories,
  getCategoryProducts,
  deleteCategory,
} = require("../controllers/Category.controller");

const { protectUser, protectAdmin } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(protectUser, getCategories);

router.route("/:categoryId/products").get(protectUser, getCategoryProducts);

router.route("/:categoryId").delete(protectAdmin, deleteCategory);

module.exports = router;
