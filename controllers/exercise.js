const express = require("express");
const router = express.Router();

const Exercise = require("../db/models/Exercises");
const Equipment = require("../db/models/Equipment");
const Muscles = require("../db/models/Muscles");

router.get("/", (req, res) => {
  Exercise.find().then(allexercises => {
    res.json(allexercises);
  });
});

router.get("/:name", (req, res) => {
  console.log(req.params.name);
  Exercise.findOne({ name: req.params.name }).then(exercise =>
    res.json(exercise)
  );
});

module.exports = router;
