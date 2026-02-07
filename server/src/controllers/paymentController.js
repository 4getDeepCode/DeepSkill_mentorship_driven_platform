const crypto = require("crypto");
const Booking = require("../models/bookingModel");
const config = require("../config");
const paymentService = require("../services/paymentService");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");
const sendEmail = require("../utils/email");
const { paymentSuccessEmail } = require("../utils/paymentEmail");

// CREATE ORDER
const createPaymentOrder = async (req, res) => {
  const { bookingId } = req.params;

  const order = await paymentService.createOrderForBooking(bookingId);

  res.status(httpStatus.ok).json({
    success: true,
    order,
    key: config.razorpay.key_id,
  });
};

// VERIFY PAYMENT
const verifyPayment = async (req, res) => {
  const { bookingId } = req.params;
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    throw new ApiError(httpStatus.notFound, "Booking not found");
  }

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;

  const expectedSignature = crypto
    .createHmac("sha256", config.razorpay.key_secret)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new ApiError(httpStatus.badRequest, "Invalid payment signature");
  }

  booking.payment.status = "paid";
  booking.payment.paymentId = razorpay_payment_id;
  booking.payment.signature = razorpay_signature;

  // Mentor payout calculation
  
  const mentorShare = booking.payment.amount * 0.9; // 90% mentor

  booking.payout = {
    amount: mentorShare,
    status: "pending",
  };

  await booking.save();

  await sendEmail({
    to: booking.student.email,
    subject: "Payment Successful",
    html: paymentSuccessEmail({
      studentName: booking.student.name,
      mentorName: booking.mentor.name,
      serviceName: booking.service.serviceName,
      amount: booking.payment.amount,
      date: booking.slot.date,
      time: `${booking.slot.startTime} - ${booking.slot.endTime}`,
    }),
  });

  res.status(httpStatus.ok).json({
    success: true,
    message: "Payment verified successfully",
  });
};

module.exports = {
  createPaymentOrder,
  verifyPayment,
};
