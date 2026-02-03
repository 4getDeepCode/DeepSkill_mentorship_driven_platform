const express = require("express");
const router = express.Router();

const userController = require("../../controllers/userController");
const authMiddleware = require("../../middleware/authMiddleware");
const asyncHandler = require("../../helper/asyncHandler");
const validate = require("../../middleware/validate");

const upload = require("../../config/multer"); 

const {
  updateUserProfileValidation,
} = require("../../validation/userValidation");

router.get(
  "/",
  authMiddleware.protect,
  asyncHandler(userController.getCurrentUserController)
);

// Update profile
router.put(
  "/update-profile",
  authMiddleware.protect,
  validate(updateUserProfileValidation),
  asyncHandler(userController.updateUserProfileController)
);

//  Upload photo
router.post(
  "/upload-photo",
  authMiddleware.protect,
  upload.single("photo"),
  asyncHandler(userController.uploadPhotoController)
);

module.exports = router;
