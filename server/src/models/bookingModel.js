const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    mentor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed"],
      default: "pending",
    },

    scheduledAt: {
      type: Date,
      required: true,
    },

    note: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = model("Booking", bookingSchema);
