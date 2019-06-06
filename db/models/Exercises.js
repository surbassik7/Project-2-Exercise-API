const mongoose = require("../connection");

const exerciseSchema = new mongoose.Schema({
  name: String,
  discription: String
  //muscles: show muscles uses in exercise
  //muscles_secondary: show secondary muscle used in exercise
  //show equpiment
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
