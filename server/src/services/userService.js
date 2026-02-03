const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");


//  Register New User Service

const registerUserService = async (userData) => {
  const { name, username, email, password } = userData;

  // Check if email already exists
  const existingEmail = await UserModel.findOne({ email });
  if (existingEmail) {
    throw new Error("Email already registered");
  }

  // Check if username already exists
  const existingUsername = await UserModel.findOne({ username });
  if (existingUsername) {
    throw new Error("Username already taken");
  }

  // Create new user
  const newUser = await UserModel.create({
    name,
    username,
    email,
    password,
  });

  return newUser;
};


// Login User Service

const loginUserService = async (email, password) => {
  // Find user with password included
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return user;
};

  //Get User By Email
const getUserByEmailService = async (email) => {
  return await UserModel.findOne({ email });
};


 // Get User By Username
 
const getUserByUsernameService = async (username) => {
  return await UserModel.findOne({ username });
};


//  Get User By ID
const getUserByIdService = async (userId) => {
  return await UserModel.findById(userId);
};

module.exports = {
  registerUserService,
  loginUserService,
  getUserByEmailService,
  getUserByUsernameService,
  getUserByIdService,
};
