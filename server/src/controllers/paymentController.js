const crypto = require("crypto");
const Booking = require("../models/bookingModel");
const config = require("../config");
const paymentService = require("../services/paymentService");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");
const sendEmail = require("../utils/email");

const { paymentSuccessEmail } = require("../utils/paymentEmail");
const { createZoomMeeting } = require("../services/zoomService");
const {studentZoomEmail, mentorZoomEmail,} = require("../utils/zoomEmail");

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

// VERIFY PAYMENT + AUTO CREATE ZOOM
const verifyPayment = async (req, res) => {
  const { bookingId } = req.params;
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const booking = await Booking.findById(bookingId)
    .populate("student", "name email")
    .populate("mentor", "name email")
    .populate("service", "serviceName");

  if (!booking) {
    throw new ApiError(httpStatus.notFound, "Booking not found");
  }

  // Verify Razorpay signature
  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac("sha256", config.razorpay.key_secret)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    throw new ApiError(httpStatus.badRequest, "Invalid payment signature");
  }

  // Mark payment paid
  booking.payment.status = "paid";
  booking.payment.paymentId = razorpay_payment_id;
  booking.payment.signature = razorpay_signature;
  booking.payment.paidAt = new Date();

  booking.expiresAt = null;

  // Mentor payout
  booking.payout = {
    amount: booking.payment.amount * 0.9,
    status: "pending",
  };

  // 🔥 CREATE ZOOM MEETING
  const zoomMeeting = await createZoomMeeting({
    topic: `DeepSkill Session - ${booking.service.serviceName}`,
    startTime: booking.slot.date,
    duration: 60,
  });

  booking.zoom = {
    meetingId: zoomMeeting.id,
    joinUrl: zoomMeeting.join_url,
    startUrl: zoomMeeting.start_url,
  };

  await booking.save();

  // EMAIL: PAYMENT SUCCESS
  await sendEmail({
    to: booking.student.email,
    subject: "Payment Successful 🎉",
    html: paymentSuccessEmail({
      studentName: booking.student.name,
      mentorName: booking.mentor.name,
      serviceName: booking.service.serviceName,
      amount: booking.payment.amount,
      date: booking.slot.date,
      time: `${booking.slot.startTime} - ${booking.slot.endTime}`,
    }),
  });

  // EMAIL: ZOOM LINKS
  await sendEmail({
    to: booking.student.email,
    subject: "Your Zoom Session Link 🎥",
    html: studentZoomEmail({
      studentName: booking.student.name,
      joinUrl: zoomMeeting.join_url,
    }),
  });

  await sendEmail({
    to: booking.mentor.email,
    subject: "Start Your Zoom Session 🎥",
    html: mentorZoomEmail({
      mentorName: booking.mentor.name,
      startUrl: zoomMeeting.start_url,
    }),
  });

  res.status(httpStatus.ok).json({
    success: true,
    message: "Payment verified & Zoom meeting created",
    booking,
  });
};

module.exports = {
  createPaymentOrder,
  verifyPayment,
};
