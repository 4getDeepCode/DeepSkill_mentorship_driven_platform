const express = require("express");
const serviceController = require("../../controllers/serviceController");
const asyncHandler = require("../../helper/asyncHandler");
const validate = require("../../middleware/validate");
const authMiddleware = require("../../middleware/authMiddleware");
const { createServiceSchema,updateServiceSchema, } = require("../../validation/serviceValidation");

const router = express.Router();

// CREATE SERVICE
router.post(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  validate(createServiceSchema),
  asyncHandler(serviceController.createService)
);

// UPDATE SERVICE
router.put(
  "/:serviceId",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  validate(updateServiceSchema),
  asyncHandler(serviceController.updateService)
);

// GET MENTOR SERVICES
router.get(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.getServiceByMentor)
);

// GET SERVICE BY ID
router.get(
  "/:serviceId",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.getServiceById)
);

// DELETE SERVICE BY ID
router.delete(
  "/:serviceId",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.deleteService)
);

module.exports = router;
