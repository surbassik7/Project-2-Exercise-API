const mongoose = require("../connection");

const muscleSchema = new mongoose.Schema({
  name: String,
  is_front: Boolean
  // show exercises that use this muscle
});

const Muscle = mongoose.model("Muscle", muscleSchema);
module.exports = Muscle;
