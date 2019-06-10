const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let Exercises = [];
for (i = 0; i <= 29; i++) {
  let exerciseURL = `https://wger.de/api/v2/exercise/?page=${i}`;

  fetch(exerciseURL)
    .then(res => res.json())
    .then(page => Exercises.push(page.results))
    .then(() => {
      console.log(Exercises);

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
