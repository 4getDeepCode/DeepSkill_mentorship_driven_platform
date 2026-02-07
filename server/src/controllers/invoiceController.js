const Booking = require("../models/bookingModel");
const generateInvoice = require("../utils/invoiceGenerator");

const downloadInvoice = async (req, res) => {
  const booking = await Booking.findById(req.params.bookingId)
    .populate("student mentor service slot");

  if (!booking || booking.payment.status !== "paid") {
    return res.status(400).json({ success: false });
  }

  generateInvoice(booking, res);
};

module.exports = { downloadInvoice };
