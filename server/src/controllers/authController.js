const userService = require("../services/authService");
const tokenService = require("../services/tokenService");
const httpStatus = require("../utils/httpStatus");


//  Sign Up Controller
//  Route: POST /api/auth/signup

const signUp = async (req, res) => {
  try {
    const { name, email, password, username, role } = req.body;

    const user = await userService.registerUser({
      name,
      email,
      username,
      password,
      role,
    });

    // Generate token after signup (optional but recommended)
    const token = await tokenService.generateAuthTokens(user);

    // Remove password safely
    const userData = user.toObject();
    delete userData.password;

    return res.status(httpStatus.created).json({
      success: true,
      message: "Account created successfully",
      token,
      user: userData,
    });
  } catch (error) {
    console.error("SIGNUP ERROR STACK 👇");
    console.error(error);
    return res.status(httpStatus.badRequest).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};


//  Sign In Controller
//  Route: POST /api/auth/signin

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUserWithEmailAndPassword(
      email,
      password,
    );

    const token = await tokenService.generateAuthTokens(user);

    // Remove password safely

    const userData = user.toObject();
    delete userData.password;

    return res.status(httpStatus.ok).json({
      success: true,
      message: "User signed in successfully",
      token,
      user: userData,
    });
  } catch (error) {
    return res.status(httpStatus.unauthorized).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  signUp,
  signIn,
};
