const razorpay = require("../utils/razorpay");
const Booking = require("../models/bookingModel");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");

const createOrderForBooking = async (bookingId) => {
  const booking = await Booking.findById(bookingId).populate("service");

  if (!booking) {
    throw new ApiError(httpStatus.notFound, "Booking not found");
  }

  if (booking.status !== "approved") {
    throw new ApiError(
      httpStatus.badRequest,
      "Booking must be approved before payment"
    );
  }

  if (booking.payment.status === "paid") {
    throw new ApiError(httpStatus.badRequest, "Already paid");
  }

  const order = await razorpay.orders.create({
    amount: booking.service.price * 100,
    currency: "INR",
    receipt: `booking_${booking._id}`,
  });

  booking.payment.orderId = order.id;
  booking.payment.amount = booking.service.price;
  await booking.save();

  return order;
};

module.exports = {
  createOrderForBooking,
};
