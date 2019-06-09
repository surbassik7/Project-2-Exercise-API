const mongoose = require("../connection");
const Schema = mongoose.Schema;
const muscleSchema = new Schema({
  name: String,
  is_front: Boolean
  // related_exercises:
});

const Muscle = mongoose.model("Muscle", muscleSchema);
module.exports = Muscle;
