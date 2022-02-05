const asyncHandler = require("../middleware/async");
const { Op } = require("sequelize");
const { Product, Category } = require("../models");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.findAll();

  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.getCategoryProducts = asyncHandler(async (req, res, next) => {
  const categoryUuid = req.params.categoryId;

  const category = await Category.findOne({ where: { categoryUuid } });

  if (!category) {
    return next(new ErrorResponse("No Category found with this id", 401));
  }

  const categoryId = category.id;

  const products = await Product.findAll({ where: { categoryId } });

  res.status(200).json({
    success: true,
    data: products,
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const categoryUuid = req.params.categoryId;

  const category = await Category.findOne({ where: { categoryUuid } });

  if (!category) {
    return next(new ErrorResponse("No Category found with this id", 401));
  }

  const categoryId = category.id;

  await Product.destroy({ where: { categoryId } });

  await category.destroy();

  res.status(200).json({
    success: true,
  });
});
