const express = require("express");
const parser = require("body-parser");

const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () =>
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
);

module.exports = router;
