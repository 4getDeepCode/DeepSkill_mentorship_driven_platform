const bookingService = require("../services/bookingService");
const ApiError = require("../helper/apiError");
const httpStatus = require("../utils/httpStatus");
const sendEmail = require("../utils/email");
const { mentorBookingRequestEmail } = require("../services/emailService");

// STUDENT → CREATE BOOKING
const createBooking = async (req, res) => {
  const { serviceId, mentorId, slotId, note } = req.body;

  if (!slotId) {
    throw new ApiError(httpStatus.badRequest, "Slot is required");
  }

  const booking = await bookingService.createBooking({
    student: req.user._id,
    mentor: mentorId,
    service: serviceId,
    slot: slotId,
    note,
    status: "pending",
  });

  // EMAIL TO MENTOR
  await sendEmail({
    to: booking.mentor.email,
    subject: "New Booking Request",
    html: mentorBookingRequestEmail({
      mentorName: booking.mentor.name,
      studentName: booking.student.name,
      serviceName: booking.service.serviceName,
      date: booking.slot.date,
      time: `${booking.slot.startTime} - ${booking.slot.endTime}`,
    }),
  });

  res.status(httpStatus.created).json({
    success: true,
    message: "Booking request sent",
    booking,
  });
};

// MENTOR → VIEW BOOKINGS
const getMentorBookings = async (req, res) => {
  const bookings = await bookingService.getBookingsForMentor(req.user._id);

  res.status(httpStatus.ok).json({
    success: true,
    bookings,
  });
};

// MENTOR → APPROVE / REJECT
const updateBookingStatus = async (req, res) => {
  const { status } = req.body;
  const { bookingId } = req.params;

  if (!["approved", "rejected"].includes(status)) {
    throw new ApiError(httpStatus.badRequest, "Invalid status");
  }

  const booking = await bookingService.updateBookingStatus(
    bookingId,
    req.user._id,
    status,
  );

  if (!booking) {
    throw new ApiError(httpStatus.notFound, "Booking not found");
  }


    //  EMAIL TO STUDENT ON APPROVAL
  if (status === "approved") {
    await sendEmail({
      to: booking.student.email,
      subject: "Your Booking is Approved",
      html: studentBookingApprovedEmail({
        studentName: booking.student.name,
        mentorName: booking.mentor.name,
        serviceName: booking.service.serviceName,
        date: booking.slot.date,
        time: `${booking.slot.startTime} - ${booking.slot.endTime}`,
      }),
    });
  }


  res.status(httpStatus.ok).json({
    success: true,
    message: `Booking ${status}`,
    booking,
  });
};

// STUDENT → VIEW BOOKINGS
const getStudentBookings = async (req, res) => {
  const bookings = await bookingService.getBookingsForStudent(req.user._id);

  res.status(httpStatus.ok).json({
    success: true,
    bookings,
  });
};

module.exports = {
  createBooking,
  getMentorBookings,
  updateBookingStatus,
  getStudentBookings,
};
