const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

/** in the responses, there is a `"next"` key that we're using until we get null */

/** step 1: use fetch to get the exercise data from the wger API, and concatenate the results to `exercieses` until we run out of new pages */

/** step 2: once we hit the end and run out of pages, we will THEN us the `fs` module to write the `exercises` array to a json file */

for (i = 0; i <= 29; i++) {
  let exerciseURL = `https://wger.de/api/v2/exercise/?page=${i}`;
  let Exercises = [];
  fetch(exerciseURL)
    .then(res => res.json())
    .then(page => Exercises.push(page))
    .then(() => {
      console.log(rExercises);

      fs.writeFile(
        "./db/exercise.json",
        JSON.stringify(Exercises),
        "utf8",
        err => {
          if (err) {
            console.log(err);
          } else
            console.log(`wrote ${Exercises.length} items to exercise.json`);
        }
      );
    });
}
