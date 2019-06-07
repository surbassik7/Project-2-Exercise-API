const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let muscleURL = `https://wger.de/api/v2/muscle/`;

fetch(muscleURL)
  .then(res => res.json())
  .then(muscles => {
    let stringified = JSON.stringify(muscles, null, 2);
    fs.writeFile("./db/muscles.json", stringified, "utf8", err => {
      if (err) {
        console.log(err);
      } else console.log(`wrote ${muscles.length} items to muscles.json`);
    });
  });
