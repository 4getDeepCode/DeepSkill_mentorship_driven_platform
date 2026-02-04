const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    mentor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    serviceName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: Number,
      required: true,
      min: 1, // minutes
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ServiceModel = model("Service", serviceSchema);
module.exports = ServiceModel;
