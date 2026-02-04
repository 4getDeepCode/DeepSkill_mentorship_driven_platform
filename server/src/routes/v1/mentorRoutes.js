const express = require("express");
const mentorController = require("../../controllers/mentorController");
const asyncHandler = require("../../helper/asyncHandler");

const router = express.Router();

// Public routes
router.get("/", asyncHandler(mentorController.getAllMentors));
router.get("/:username", asyncHandler(mentorController.getMentorInfoByUsername));
router.get("/:username/services",asyncHandler(mentorController.getMentorServices)
);


module.exports = router;
