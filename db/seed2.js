const Exercise = require("../db/models/Exercises");
const exerciseData = require("../db/exerciseSingleArray.json");

const exerciseSeedData = exerciseData.map(exercise => {
  const exerciseSeed = {};
  exerciseSeed.name = exercise.name;
  exerciseSeed.description = exercise.description;
  return exerciseSeed;
});

Exercise.deleteMany().then(() => {
  Exercise.create(exerciseSeedData).then(exercise => {
    console.log("done");
    process.exit();
  });
});
