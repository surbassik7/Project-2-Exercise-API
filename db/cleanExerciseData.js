const fs = require("fs");

const rawExerciseData = require("./exercise.json");

let exerciseData = [];

rawExerciseData.forEach(exercisePage => {
  exercisePage.forEach(exercise => {
    exerciseData.push(exercise);
  });
});

exerciseData = exerciseData.map(exercise => {
  return {
    name: exercise.name,
    description: exercise.description,
    muscle: exercise.muscle,
    secondary_muscle: exercise.muscle_second,
    equipment: exercise.equipment
  };
});

console.log(exerciseData);

fs.writeFile(
  "./db/exerciseSingleArray.json",
  JSON.stringify(exerciseData),
  err => {
    if (err) throw err;
    console.log("done");
  }
);
