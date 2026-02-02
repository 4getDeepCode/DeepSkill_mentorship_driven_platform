const UserModel = require("../models/userModel");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");

// Register User Service
 
const registerUser = async (data) => {
  const existingUser = await UserModel.findOne({ email: data.email });

  if (existingUser) {
    throw new ApiError(httpStatus.conflict, "Email already exists");
  }

  return await UserModel.create(data);
};

// Login User Service
 
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(
      httpStatus.unauthorized,
      "Incorrect email or password"
    );
  }

  return user;
};

module.exports = {
  registerUser,
  loginUserWithEmailAndPassword,
};
