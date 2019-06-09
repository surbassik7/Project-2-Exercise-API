const express = require("express");
const router = express.Router();

const Muscles = require("../db/models/Muscles");
const Exercise = require("../db/models/Exercises");
const Equipment = require("../db/models/Equipment");

router.get("/", (req, res) => {
  Muscles.find().then(allmuscles => {
    res.json(allmuscles);
  });
});

router.get("/:name", (req, res) => {
  console.log(req.params.name);
  Muscles.findOne({ name: req.params.name }).then(muscles => res.json(muscles));
});

module.exports = router;
