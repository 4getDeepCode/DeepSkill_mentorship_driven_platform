const express = require("express");
const authController = require("../../controllers/authController");
const validate = require("../../middleware/validate");
const asyncHandler = require("../../helper/asyncHandler");

const {
  signInValidation,
  signUpValidation,
} = require("../../validation/authValidation");

const router = express.Router();

//  Auth Routes

router.post(
  "/signup",
  validate(signUpValidation),
  asyncHandler(authController.signUp)
);

router.post(
  "/signin",
  validate(signInValidation),
  asyncHandler(authController.signIn)
);

module.exports = router;
