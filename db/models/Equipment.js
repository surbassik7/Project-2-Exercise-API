const mongoose = require("../connection");

const equipmentSchema = new mongoose.Schema({
  name: String
  //show exercises that use this equipment
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;
