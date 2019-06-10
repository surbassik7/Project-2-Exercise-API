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
  Exercise.findOne({ name: req.params.name }).then(oneExercise =>
    res.json(oneExercise)
  );
});

router.post("/:name", (req, res) => {
  const newExercise = req.body;
  Exercise.create(req.body).then(newExercise => res.json(newExercise));
});

router.patch("/:id", (req, res) => {
  Exercise.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(updateExercise => res.json(updateExercise));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete({ _id: req.params.id }).then(deleteExercise => {
    res.json(deleteExercise);
  });
});

module.exports = router;
