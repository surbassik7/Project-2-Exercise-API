const axios = require("axios");
const fs = require("fs");

let baseURL = `https://wger.de/api/v2/muscle/`;

fetch(baseURL)
  .then(resp => resp.json())
  .then(function() {});
