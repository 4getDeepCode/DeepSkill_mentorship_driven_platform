const cloudinary = require("cloudinary").v2;
const config = require("../config");
const httpStatus = require("../utils/httpStatus");
const { getUserByIdService } = require("../services/userService");
const UserModel = require("../models/userModel");

// Configure Cloudinary
cloudinary.config(config.cloudinary);

//  Upload User Photo Controller

const uploadPhotoController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(httpStatus.badRequest).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "user_photos",
      use_filename: true,
    });

    // Update user photo URL in DB
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      { photoUrl: result.secure_url },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(httpStatus.notFound).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(httpStatus.ok).json({
      success: true,
      message: "Photo uploaded successfully",
      photoUrl: updatedUser.photoUrl,
    });
  } catch (error) {
    console.error("Upload Photo Error:", error);

    return res.status(httpStatus.internalServerError).json({
      success: false,
      message: "Error uploading photo",
    });
  }
};

// Get Logged-in User Controller

const getCurrentUserController = async (req, res) => {
  try {
    const user = await getUserByIdService(req.user._id);

    if (!user) {
      return res.status(httpStatus.notFound).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(httpStatus.ok).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    return res.status(httpStatus.internalServerError).json({
      success: false,
      message: error.message,
    });
  }
};

//  Update User Profile Controller

const updateUserProfileController = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      { profile: req.body },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(httpStatus.notFound).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(httpStatus.ok).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(httpStatus.internalServerError).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadPhotoController,
  getCurrentUserController,
  updateUserProfileController,
};
