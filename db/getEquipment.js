const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let equipmentURL = `https://wger.de/api/v2/equipment/?format=json`;

fetch(equipmentURL)
  .then(res => res.json())
  .then(equipment => {
    let stringified = JSON.stringify(equipment, null, 2);
    fs.writeFile("./db/equipment.json", stringified, "utf8", err => {
      if (err) {
        console.log(err);
      } else console.log(`wrote ${equipment.length} items to equipment.json`);
    });
  });
