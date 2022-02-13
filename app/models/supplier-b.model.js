const mongoose = require("mongoose");

const supplier_b_Model = mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: [true, "Hotel name Not Found"],
    },
    Rate: {
      type: String,
      default: "",
      required: [true, "Rate Not Found"],
    },
    Price: {
      type: Number,
      default: 0,
      required: [true, "Price Not Found"],
    },
    amenities: {
      type: String,
      required: [true, "amenities Not Found"],
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
  const Supplier_b_Model = mongoose.model("Supplier_b_Model", supplier_b_Model);
  return Supplier_b_Model;
};
