const Razorpay = require("razorpay");
const config = require("../config");

const razorpay = new Razorpay({
  key_id: config.razorpay.key_id,
  key_secret: config.razorpay.key_secret,
});

console.log("Razorpay service initialized");

module.exports = razorpay;
