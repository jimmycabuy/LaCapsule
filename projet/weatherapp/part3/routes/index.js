var express = require("express");
var router = express.Router();
var cityModel = require('./bdd');

var cityList = [];

var request = require("sync-request");

router.get("/", function (req, res, next) {
  res.render("login");
});

router.get("/weather", function (req, res, next) {
  res.render("weather", {
    cityList: cityList,
  });
});

router.post("/add-city", function (req, res, next) {
  var dataAPI = req.body.cityadded;
  var requete = request("GET", `https://api.openweathermap.org/data/2.5/weather?q=${dataAPI}&lang=fr&units=metric&appid=a6e3eaa80322d67999b7ac143be3fddb`);
  var resultWS = JSON.parse(requete.body);
  console.log(resultWS.cod);

  var cityAlreadyAdded = false;
  for (var i = 0; i < cityList.length; i++) {
    if (cityList[i].nom == resultWS.name) {
      cityAlreadyAdded = true;
    }
  }
  if (cityAlreadyAdded == false && resultWS.cod === 200) {
    cityList.push({
      nom: resultWS.name,
      image: `http://openweathermap.org/img/wn/${resultWS.weather[0].icon}.png`,
      descriptif: resultWS.weather[0].description,
      tempMin: resultWS.main.temp_min,
      tempMax: resultWS.main.temp_max,
    });
  }
  res.render("weather", {
    cityList: cityList,
    resultWS: resultWS,
  });
});

router.get("/delete-city", function (req, res, next) {
  cityList.splice(req.query.cityadded, 1);
  res.render("weather", {
    cityList: cityList,
  });
});

module.exports = router;