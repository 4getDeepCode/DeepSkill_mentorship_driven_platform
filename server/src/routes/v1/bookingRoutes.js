const express = require("express");
const bookingController = require("../../controllers/bookingController");
const authMiddleware = require("../../middleware/authMiddleware");
const asyncHandler = require("../../helper/asyncHandler");

const router = express.Router();

// STUDENT
router.post(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("student"),
  asyncHandler(bookingController.createBooking),
);

router.get(
  "/student",
  authMiddleware.protect,
  authMiddleware.restrictTo("student"),
  asyncHandler(bookingController.getStudentBookings),
);

// MENTOR
router.get(
  "/mentor",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(bookingController.getMentorBookings),
);

router.patch(
  "/:bookingId",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(bookingController.updateBookingStatus),
);

module.exports = router;
