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

module.exports = router;
