const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server run on port 3000");
});

app.use(express.static(__dirname + "/public"));

app.get("/tts", (req, res) => {
  res.render("Tes tts.ejs");
});

app.get("/kalkulator", (req, res) => {
  res.render("kalkulator_scientific.ejs");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});
