const db = require("../models");
const Supplier_a = db.supplier_a_model;

// Create and Save a new User

exports.createSupplier_a = (req, res) => {
  // Validate request
  if (
    !req.body.Hotel ||
    !req.body.Rate ||
    !req.body.Fare ||
    !req.body.roomAmenities
  ) {
    res.status(400).send({
      message: "Somthing is missing!",
    });

    return;
  }

  // Create a new supplier_a
  var supplier_a = new Supplier_a({
    Hotel: req.body.Hotel,
    Rate: req.body.Rate,
    Fare: req.body.Fare,
    roomAmenities: req.body.roomAmenities,
  });

  // Save Supplier_a in the database
  supplier_a
    .save(supplier_a)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the supplier_a.",
      });
    });
};

// Retrieve all supplier_a from the database.
exports.findAllSupplier_a = (req, res) => {
  var condition = {};

  Supplier_a.find(condition)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving supplier_a.",
      });
    });
};
