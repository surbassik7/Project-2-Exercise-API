const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let currentPage = 1;
let exerciseURL = `https://wger.de/api/v2/exercise/?page=
${currentPage}`;
// /api/v2/exercise.json

let exercises = [];

for (i = 1; i <= 29; i++) {
  fetch(exerciseURL + currentPage)
    .then(res => res.json())
    .then(idk => exercises.push(idk))
    .then(() => console.log(exercises))
    .catch(err => {
      console.log("something went wrong...", err);
    });
}
/** in the responses, there is a `"next"` key that we're using until we get null */

/** step 1: use fetch to get the exercise data from the wger API, and concatenate the results to `exercieses` until we run out of new pages */

/** step 2: once we hit the end and run out of pages, we will THEN us the `fs` module to write the `exercises` array to a json file */

// fetch(exerciseURL)
//   .then(res => res.json())
//   .then(var2 => {
//     let stringified = JSON.stringify(var2, null, 2);
//     fs.writeFile("./exercise.json", stringified, "utf8", err => {
//       if (err) {
//         console.log(err);
//       } else console.log(`wrote ${var2.length} items to exercise.json`);
//     });
//   });
