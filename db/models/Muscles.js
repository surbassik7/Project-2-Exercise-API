const mongoose = require("../connection");

const muscleSchema = new mongoose.Schema({
  name: String,
  is_front: Boolean
  // related_exercises:
});

const Muscle = mongoose.model("Muscle", muscleSchema);
module.exports = Muscle;
