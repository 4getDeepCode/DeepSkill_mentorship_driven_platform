const Joi = require("joi");
const httpStatus = require("../utils/httpStatus");
const ApiError = require("../helper/apiError");

const ValidationSource = {
  BODY: "body",
  QUERY: "query",
  PARAMS: "params",
  HEADERS: "headers",
};

const validate = (schema, source = ValidationSource.BODY) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req[source], {
        abortEarly: false,
        allowUnknown: true,
      });

      if (!error) return next();

      const message = error.details
        .map((detail) => detail.message.replace(/['"]/g, ""))
        .join(", ");

      return next(new ApiError(httpStatus.badRequest, message));
    } catch (err) {
      return next(err);
    }
  };
};

module.exports = validate;
