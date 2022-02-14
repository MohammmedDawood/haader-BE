module.exports = (app) => {
  const supplier_b = require("../controllers/supplier-b.controller.js");

  var router = require("express").Router();

  // Create a new store
  router.post("/create_supplier_b", supplier_b.createSupplier_b);

  // Retrieve all stores
  router.get("/get_supplier_b_all", supplier_b.findAllSupplier_b);

  // export router to app
  app.use("/api/supplier_b", router);
};
