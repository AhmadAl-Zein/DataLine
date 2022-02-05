const asyncHandler = require("../middleware/async");
const { Op } = require("sequelize");
const { User } = require("../models");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(new ErrorResponse("Wrong Email", 401));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorResponse(`Not valid email or password`, 400));
  }

  const token = jwt.sign({ id: user.userUuid }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({
    success: true,
    token,
  });
});
