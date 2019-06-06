const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let exerciseURL = `https://wger.de/api/v2/exercise/`;

let exercise = [];

let calls = exercise
  .map(id => `${exerciseURL}${id}`)
  .map(url => axios.get(url));

fetch(muscleURL)
  .then(resp => resp.json())
  .then(function() {
    Promise.all(calls)
      .then(success => {
        let collectedData = success.map(res => res.data);
        let stringified = JSON.stringify(collectedData);
        fs.writeFile(__dirname + "/exercise.json", stringified, "utf8", err => {
          if (err) {
            console.error(err);
          } else {
            console.log(
              `successfully wrote ${
                collectedData.length
              } records to db/exercises.json`
            );
          }
        });
      })
      .catch(err => {
        console.error(err);
        console.error(
          "there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above."
        );
      });
  });
