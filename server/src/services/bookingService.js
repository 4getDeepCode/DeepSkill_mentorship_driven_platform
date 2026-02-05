const BookingModel = require("../models/bookingModel");

const createBooking = async (data) => {
  return await BookingModel.create(data);
};

const getBookingsForMentor = async (mentorId) => {
  return await BookingModel.find({ mentor: mentorId })
    .populate("student", "name email")
    .populate("service", "serviceName price");
};

const updateBookingStatus = async (bookingId, mentorId, status) => {
  return await BookingModel.findOneAndUpdate(
    { _id: bookingId, mentor: mentorId },
    { status },
    { new: true }
  );
};

const getBookingsForStudent = async (studentId) => {
  return await BookingModel.find({ student: studentId })
    .populate("mentor", "name username")
    .populate("service", "serviceName price");
};

module.exports = {
  createBooking,
  getBookingsForMentor,
  updateBookingStatus,
  getBookingsForStudent,
};
