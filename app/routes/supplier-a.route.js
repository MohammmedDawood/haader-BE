module.exports = (app) => {
  const supplier_a = require("../controllers/supplier-a.controller.js");

  var router = require("express").Router();

  // Create a new store
  router.post("/create_supplier_a", supplier_a.createSupplier_a);

  // Retrieve all stores
  router.get("/get_supplier_a_all", supplier_a.findAllSupplier_a);

  // export router to app
  app.use("/api/supplier_a", router);
};
