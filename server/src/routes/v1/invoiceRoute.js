const express = require("express");
const invoiceController = require("../../controllers/invoiceController");
const { protect, restrictTo } = require("../../middleware/authMiddleware");


const router = express.Router();

/**
 * Download Invoice (Student only)
 * GET /api/bookings/:bookingId/invoice
 */
router.get(
  "/:bookingId/invoice",
  protect,
  restrictTo("student"),
  invoiceController.downloadInvoice
);

module.exports = router;
