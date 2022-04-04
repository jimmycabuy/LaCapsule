var express = require("express");
var router = express.Router();

var cityList = [
  {
    nom: "Paris",
    image: "/images/picto-1.png",
    descriptif: "Nuageux",
    tempMin: 7,
    tempMax: 12,
  },
  {
    nom: "Lyon",
    image: "/images/picto-1.png",
    descriptif: "Nuageux",
    tempMin: 4,
    tempMax: 10,
  }
];

router.get("/", function (req, res, next) {
  res.render("login");
});

router.get("/weather", function (req, res, next) {
  res.render("weather", { cityList: cityList });
});

module.exports = router;
