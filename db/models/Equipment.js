const mongoose = require("../connection");
const Schema = mongoose.Schema;
const equipmentSchema = new Schema({
  name: String
  //show exercises that use this equipment
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;
