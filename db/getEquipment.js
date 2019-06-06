const axios = require("axios");
const fs = require("fs");

let equipmentURL = `https://wger.de/api/v2/equipment/`;

let equipment = [];

// fetch(equipmentURL)
//   .then(resp => resp.json())
//   .then(function() {});

fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });

fetch(`https://wger.de/api/v2/equipment/`)
  .then(res => res.json())
  .then(data => {
    createAll(data);
    console.log(data);
  })
  .catch(err => console.log(err));
