const availabilityService = require("../services/availabilityService");
const httpStatus = require("../utils/httpStatus");

// MENTOR → CREATE SLOT
const createSlot = async (req, res) => {
  const mentorId = req.user._id;
  const { serviceId, date, startTime, endTime } = req.body;

  const slot = await availabilityService.createSlot({
    mentor: mentorId,
    service: serviceId,
    date,
    startTime,
    endTime,
  });

  res.status(httpStatus.created).json({
    success: true,
    message: "Availability slot created",
    slot,
  });
};

// MENTOR → VIEW OWN SLOTS
const getMentorSlots = async (req, res) => {
  const slots = await availabilityService.getMentorSlots(req.user._id);

  res.status(httpStatus.ok).json({
    success: true,
    slots,
  });
};

// PUBLIC → VIEW AVAILABLE SLOTS
const getAvailableSlots = async (req, res) => {
  const { mentorId, serviceId } = req.params;

  const slots = await availabilityService.getAvailableSlots(
    mentorId,
    serviceId
  );

  res.status(httpStatus.ok).json({
    success: true,
    slots,
  });
};

module.exports = {
  createSlot,
  getMentorSlots,
  getAvailableSlots,
};
