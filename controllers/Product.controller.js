const asyncHandler = require("../middleware/async");
const { Op } = require("sequelize");
const { Product, Category } = require("../models");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.addProduct = asyncHandler(async (req, res, next) => {
  const {
    categoryUuid,
    name,
    creationDate,
    duration,
    price,
    extras,
  } = req.body;

  const category = await Category.findOne({ where: { categoryUuid } });

  if (!category) {
    return next(new ErrorResponse("No Category found with this id", 401));
  }

  const categoryId = category.id;

  const product = await Product.create({
    categoryId,
    name,
    creationDate,
    duration,
    price,
    extras,
  });

  res.status(200).json({
    success: true,
    data: product,
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.findAll();

  res.status(200).json({
    success: true,
    data: products,
  });
});

exports.getProductById = asyncHandler(async (req, res, next) => {
  const productUuid = req.params.productId;

  const product = await Product.findOne({ where: { productUuid } });

  if (!product) {
    return next(new ErrorResponse("No Product found with this id", 401));
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const productUuid = req.params.productId;
  const {
    categoryUuid,
    name,
    creationDate,
    startDate,
    duration,
    price,
    extras,
  } = req.body;

  const product = await Product.findOne({ where: { productUuid } });

  if (!product) {
    return next(new ErrorResponse("No Product found with this id", 401));
  }

  if (categoryUuid) {
    const category = await Category.findOne({ where: { categoryUuid } });

    if (!category) {
      return next(new ErrorResponse("No Category found with this id", 401));
    }

    const categoryId = category.id;
    product.categoryId = categoryId;
  }

  product.name = name || product.name;
  product.creationDate = creationDate || product.creationDate;
  product.duration = duration || product.duration;
  product.price = price || product.price;
  product.extras = {...product.extras, ...extras}

  await product.save();

  res.status(200).json({
    success: true,
    data: product,
  });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const productUuid = req.params.productId;

  const product = await Product.findOne({ where: { productUuid } });

  if (!product) {
    return next(new ErrorResponse("Nor Product found with this id", 401));
  }

  await product.destroy();

  res.status(200).json({
    success: true,
  });
});
