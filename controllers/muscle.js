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

module.exports = router;
