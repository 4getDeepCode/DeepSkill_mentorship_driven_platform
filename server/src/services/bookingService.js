const BookingModel = require("../models/bookingModel");
const availabilityService = require("./availabilityService");

const createBooking = async (data) => {
  await availabilityService.markSlotBooked(data.slot);
  const booking = await BookingModel.create(data);

  return await BookingModel.findById(booking._id)
    .populate("student", "name email")
    .populate("mentor", "name email")
    .populate("service", "serviceName")
    .populate("slot", "date startTime endTime");
};

const getBookingsForMentor = async (mentorId) => {
  return await BookingModel.find({ mentor: mentorId })
    .populate("student", "name email")
    .populate("service", "serviceName price")
    .populate("slot", "date startTime endTime");
};

const updateBookingStatus = async (bookingId, mentorId, status) => {
  return await BookingModel.findOneAndUpdate(
    { _id: bookingId, mentor: mentorId },
    { status },
    { new: true },
  )
    .populate("student", "name email")
    .populate("service", "serviceName price")
    .populate("slot", "date startTime endTime");
};

const getBookingsForStudent = async (studentId) => {
  return await BookingModel.find({ student: studentId })
    .populate("mentor", "name username")
    .populate("service", "serviceName price")
    .populate("slot", "date startTime endTime");
};

module.exports = {
  createBooking,
  getBookingsForMentor,
  updateBookingStatus,
  getBookingsForStudent,
};
