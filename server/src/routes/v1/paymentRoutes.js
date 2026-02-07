const express = require("express");
const { protect, restrictTo } = require("../../middleware/authMiddleware");
const paymentController = require("../../controllers/paymentController");
const router = express.Router();

/**
 * Student creates Razorpay order
 */
router.post(
  "/create-order/:bookingId",
  protect,
  restrictTo("student"),
  paymentController.createPaymentOrder,
);

/**
 * Verify Razorpay payment
 */
router.post(
  "/verify/:bookingId",
  protect,
  restrictTo("student"),
  paymentController.verifyPayment
);

module.exports = router;
