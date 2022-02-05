const express = require("express");

const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/Product.controller");

const { protectUser, protectAdmin } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(protectAdmin, addProduct).get(protectUser, getProducts);

router
  .route("/:productId")
  .get(protectUser, getProductById)
  .put(protectAdmin, updateProduct)
  .delete(protectAdmin, deleteProduct);

module.exports = router;
