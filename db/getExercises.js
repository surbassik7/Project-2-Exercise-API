const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let currentPage = 1;
// let exerciseURL = `https://wger.de/api/v2/exercise/?page=${currentPage}`;

let exercises = [];

/** in the responses, there is a `"next"` key that we're using until we get null */

/** step 1: use fetch to get the exercise data from the wger API, and concatenate the results to `exercieses` until we run out of new pages */

/** step 2: once we hit the end and run out of pages, we will THEN us the `fs` module to write the `exercises` array to a json file */

function fetchExerciseData() {
  let pagesRequired = 0;

  fetch(`https://wger.de/api/v2/exercise/?page=1`).then(res => {
    const exerciesespromise = [];
    pagesRequired = res.data.pagesRequired;

    for (let i = pagesRequired; i < 0; i++) {
      exerciesespromise.push(
        fetch(`https://wger.de/api/v2/exercise/?page=${currentPage}` + i)
      );
    }

    Promise.all(exerciesespromise).then(res => {
      const processedExercises = [];
      res
        .map(res => {
          processedExercises.push(res);
        })
        .then(console.log(exerciesespromise));
    });
  });
}
