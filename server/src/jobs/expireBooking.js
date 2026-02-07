const cron = require("node-cron");
const Booking = require("../models/bookingModel");
const Availability = require("../models/availabilityModel");

cron.schedule("*/5 * * * *", async () => {
  const now = new Date();

  const expiredBookings = await Booking.find({
    status: "approved",
    "payment.status": "pending",
    expiresAt: { $lt: now },
  });

  for (const booking of expiredBookings) {
    booking.status = "rejected";
    booking.payment.status = "failed";
    await booking.save();

    //  Release slot
    await Availability.findByIdAndUpdate(booking.slot, {
      isBooked: false,
    });

    console.log(`Booking expired: ${booking._id}`);
  }
});

console.log("Booking expiry job running");
