const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//stop mongoose from adding S to name of collection.
mongoose.pluralize(null);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.users = require("./users.model.js")(mongoose);
db.supplier_a_model = require("./supplier-a.model.js")(mongoose);
db.supplier_b_model = require("./supplier-b.model.js")(mongoose);

module.exports = db;
