const express = require("express");
const availabilityController = require("../../controllers/availabilityController");
const authMiddleware = require("../../middleware/authMiddleware");
const asyncHandler = require("../../helper/asyncHandler");

const router = express.Router();

// MENTOR
router.post(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(availabilityController.createSlot),
);

router.get(
  "/mentor",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(availabilityController.getMentorSlots),
);

// PUBLIC (Student)
router.get(
  "/:mentorId/:serviceId",
  asyncHandler(availabilityController.getAvailableSlots),
);

module.exports = router;
