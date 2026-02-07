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

    slot: {
      type: Schema.Types.ObjectId,
      ref: "Availability",
      required: true,
    },

    note: {
      type: String,
      default: "",
    },

    payment: {
      status: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
      },
      orderId: String,
      paymentId: String,
      signature: String,
      amount: Number,
      currency: {
        type: String,
        default: "INR",
      },
    },
    payout: {
      amount: Number,
      status: {
        type: String,
        enum: ["pending", "processed"],
        default: "pending",
      },
    },

    expiresAt: {
      type: Date,
      index: true,
    },
  },
  { timestamps: true },
);

module.exports = model("Booking", bookingSchema);
