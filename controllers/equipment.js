const express = require("express");
const router = express.Router();

const Equipment = require("../db/models/Equipment");
const Exercise = require("../db/models/Exercises");
const Muscles = require("../db/models/Muscles");

router.get("/", (req, res) => {
  Equipment.find().then(allequipment => {
    res.json(allequipment);
  });
});

router.get("/:name", (req, res) => {
  console.log(req.params.name);
  Equipment.findOne({ name: req.params.name }).then(equipment =>
    res.json(equipment)
  );
});

module.exports = router;
