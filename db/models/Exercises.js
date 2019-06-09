const mongoose = require("../connection");
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
  name: String,
  description: String,
  primary_muscles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Muscles"
    }
  ],
  secondary_muscles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Muscles"
    }
  ],
  equipment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Equpiment"
    }
  ]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
