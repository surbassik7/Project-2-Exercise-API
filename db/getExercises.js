const axios = require("axios");
const fs = require("fs");

let exerciseURL = `https://wger.de/api/v2/exercise/`;

fetch(exerciseURL)
  .then(resp => resp.json())
  .then(function() {});
