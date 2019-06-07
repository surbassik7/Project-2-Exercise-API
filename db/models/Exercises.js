const mongoose = require("../connection");

const exerciseSchema = new mongoose.Schema({
  name: String,
  discription: String
  // primary_muscles: show muscles uses in exercise,
  // secondary_muscles: show secondary muscle used in exercise,
  // equipment:
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
