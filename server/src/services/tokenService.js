const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../config");

// Generate JWT Token
 
const generateToken = (userId, expires, secret) => {
  const payload = {
    sub: userId, // standard practice
    iat: moment().unix(),
    exp: expires.unix(),
  };

  return jwt.sign(payload, secret);
};

// Generate Auth Access Token
 
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    "minutes"
  );

  const accessToken = generateToken(
    user._id,
    accessTokenExpires,
    config.jwt.accessSecret
  );

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
  };
};

// Generate Email Verification Token

const generateVerificationToken = async (userId) => {
  const verificationTokenExpires = moment().add(
    config.jwt.verificationExpirationMinutes,
    "minutes"
  );

  const verificationToken = generateToken(
    userId,
    verificationTokenExpires,
    config.jwt.verificationSecret
  );

  return verificationToken;
};

// Verify Token

const verifyToken = async (token, secret) => {
  return jwt.verify(token, secret);
};

module.exports = {
  generateAuthTokens,
  generateVerificationToken,
  verifyToken,
};
