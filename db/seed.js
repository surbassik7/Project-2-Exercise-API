const mongoose = require("./connection");
const equipmentModel = require("../db/models/Equipment");
const equipment = require("../db/equipment.json");
const muscleModel = require("../db/models/Muscles");
const muscles = require("../db/muscles.json");
const exerciseModel = require("../db/models/Exercises");
const exercises = require("../db/exercises.json");

equipmentModel.remove({});
equipmentModel.collection
  .insert(equipment)
  .then(equipmentModel => {
    console.log(equipment);
  })
  .catch(err => {
    console.log(err);
  });

muscleModel.remove({});
muscleModel.collection
  .insert(muscles)
  .then(muscleModel => {
    console.log(muscles);
  })
  .catch(err => {
    console.log(err);
  });

exerciseModel.remove({});
exerciseModel.collection
  .insert(exercises)
  .then(exerciseModel => {
    console.log(exercises);
  })
  .catch(err => {
    console.log(err);
  });
