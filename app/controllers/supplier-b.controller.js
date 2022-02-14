const db = require("../models");
const Supplier_b = db.supplier_b_model;

// Create and Save a new User

exports.createSupplier_b = (req, res) => {
  // Validate request
  if (
    !req.body.hotelName ||
    !req.body.Rate ||
    !req.body.Price ||
    !req.body.amenities
  ) {
    res.status(400).send({
      message: "Somthing is missing!",
    });

    return;
  }

  // Create a new supplier_a
  var supplier_b = new Supplier_b({
    hotelName: req.body.hotelName,
    Rate: req.body.Rate,
    Price: req.body.Price,
    discount: req.body.discount,
    amenities: req.body.amenities,
  });

  // Save Supplier_a in the database
  supplier_b
    .save(supplier_b)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the supplier_b.",
      });
    });
};

// Retrieve all supplier_a from the database.
exports.findAllSupplier_b = (req, res) => {
  var condition = {};

  Supplier_b.find(condition)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Supplier_b.",
      });
    });
};
