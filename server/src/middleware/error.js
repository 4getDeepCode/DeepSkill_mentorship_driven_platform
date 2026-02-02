const httpStatus = require("../utils/httpStatus");
const config = require("../config");

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose invalid ObjectId
  if (err.name === "CastError") {
    statusCode = httpStatus.badRequest;
    message = "Invalid ID format";
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    statusCode = httpStatus.conflict;
    message = `Duplicate field value: ${Object.keys(err.keyValue).join(", ")}`;
  }

  // Joi / Mongoose validation
  if (err.name === "ValidationError") {
    statusCode = httpStatus.badRequest;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    status: err.status || "error",
    message,
    // ...(config.env === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
