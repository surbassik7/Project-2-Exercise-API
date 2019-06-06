const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");

let equipmentURL = `https://wger.de/api/v2/equipment/`;

let equipment = [];

let calls = equipment
  .map(id => `${equipmentURL}${id}`)
  .map(url => axios.get(url));

fetch(equipmentURL)
  .then(resp => resp.json())
  .then(function() {
    Promise.all(calls)
      .then(success => {
        let collectedData = success.map(res => res.data);
        let stringified = JSON.stringify(collectedData);
        fs.writeFile(
          __dirname + "/equipment.json",
          stringified,
          "utf8",
          err => {
            if (err) {
              console.error(err);
            } else {
              console.log(
                `successfully wrote ${
                  collectedData.length
                } records to db/equipment.json`
              );
            }
          }
        );
      })
      .catch(err => {
        console.error(err);
        console.error(
          "there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above."
        );
      });
  });
// fetch(equipmentURL)
//   .then(resp => resp.json())
//   .then(function() {});

// fetch(equipmentURL)
//   .then(res => {
//     console.log("success!", res);
//   })
//   .catch(err => {
//     console.log("something went wrong...", err);
//   });

// fetch(`https://wger.de/api/v2/equipment/`)
//   .then(res => res.json())
//   .then(data => {
//     createAll(data);
//     console.log(data);
//   })
//   .catch(err => console.log(err));
