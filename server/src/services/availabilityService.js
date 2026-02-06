const Availability = require("../models/availabilityModel");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");

const createSlot = async (data) => {
  return await Availability.create(data);
};

const getMentorSlots = async (mentorId) => {
  return await Availability.find({ mentor: mentorId }).sort({ startTime: 1 });
};

const getAvailableSlots = async (mentorId, serviceId) => {
  return await Availability.find({
    mentor: mentorId,
    service: serviceId,
    isBooked: false,
  }).sort({ startTime: 1 });
};

const markSlotBooked = async (slotId) => {
  const slot = await Availability.findOneAndUpdate(
    { _id: slotId, isBooked: false },
    { isBooked: true },
    { new: true },
  );

  if (!slot) {
    throw new ApiError(httpStatus.badRequest, "Slot already booked or invalid");
  }

  return slot;
};

module.exports = {
  createSlot,
  getAvailableSlots,
  markSlotBooked,
  getMentorSlots,
};
