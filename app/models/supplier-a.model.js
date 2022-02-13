const mongoose = require("mongoose");

const supplier_a_Model = mongoose.Schema(
  {
    Hotel: {
      type: String,
      required: [true, "Hotel name Not Found"],
    },
    Rate: {
      type: Number,
      default: 0,
      required: [true, "Rate Not Found"],
    },
    Fare: {
      type: Number,
      default: 0,
      required: [true, "Fare Not Found"],
    },
    roomAmenities: {
      type: String,
      required: [true, "roomAmenities Not Found"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = (mongoose) => {
  const Supplier_a_Model = mongoose.model("Supplier_a_Model", supplier_a_Model);
  return Supplier_a_Model;
};
