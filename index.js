const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const equipmentCon = require("./controllers/equipment");
const exerciseCon = require("./controllers/exercise");
const muscleCon = require("./controllers/muscle");

const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use("/api/equipment", equipmentCon);

app.use("/api/exercise", exerciseCon);

app.use("/api/muscle", muscleCon);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

module.exports = router;
