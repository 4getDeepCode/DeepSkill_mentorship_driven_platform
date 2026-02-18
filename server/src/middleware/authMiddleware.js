const jwt = require("jsonwebtoken");
const config = require("../config");
const { getUserByIdService } = require("../services/userService");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");

//  Protect Middleware (JWT Auth)

const protect = async (req, res, next) => {
  try {
    let token;

    // Check Bearer token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No token found
    if (!token) {
      return next(
        new ApiError(
          httpStatus.unauthorized,
          "You are not logged in! Please login first.",
        ),
      );
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwt.accessSecret);
  

    // Get current user
    const currentUser = await getUserByIdService(decoded.sub);

    if (!currentUser) {
      return next(
        new ApiError(httpStatus.unauthorized, "User no longer exists."),
      );
    }

    // Attach user to request
    req.user = currentUser;
    next();
  } catch (error) {
    return next(
      new ApiError(httpStatus.unauthorized, "Invalid or expired token."),
    );
  }
};

//  Restrict To Roles Middleware

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          httpStatus.forbidden,
          "You do not have permission to perform this action.",
        ),
      );
    }

    next();
  };
};

module.exports = {
  protect,
  restrictTo,
};
