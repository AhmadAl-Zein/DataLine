const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const { User } = require("../models");

exports.protectAdmin = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      where: { userUuid: decoded.id },
    });

    if (!user) {
      return next(new ErrorResponse("Not authorize to access this route", 401));
    }

    if (!user.isAdmin) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }

    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});

exports.protectUser = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      where: { userUuid: decoded.id },
    });

    if (!user) {
      return next(new ErrorResponse("Not authorize to access this route", 401));
    }

    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});
