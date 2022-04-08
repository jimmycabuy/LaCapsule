var express = require("express");
var router = express.Router();
var cityModel = require('../models/cities');
var userModel = require('../models/users');

var request = require("sync-request");

router.get("/", function (req, res, next) {
  res.render("login");
});

router.get("/weather", async function (req, res, next) {
  cityList = await cityModel.find();
  res.render("weather", {
    cityList: cityList,
  });
});

router.post("/add-city", async function (req, res, next) {
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

    var newCity = new cityModel({
      nom: resultWS.name,
      image: `http://openweathermap.org/img/wn/${resultWS.weather[0].icon}.png`,
      descriptif: resultWS.weather[0].description,
      tempMin: resultWS.main.temp_min,
      tempMax: resultWS.main.temp_max,
      lon: resultWS.coord.lon,
      lat: resultWS.coord.lat
    })
    await newCity.save();
  }
  cityList = await cityModel.find();
  res.render("weather", {
    cityList: cityList,
    resultWS: resultWS,
  });
});

router.get("/delete-city", async function (req, res, next) {
  await cityModel.deleteOne({
    _id: req.query.cityadded
  })
  cityList = await cityModel.find();
  res.render("weather", {
    cityList: cityList,
  });
});

router.get("/update-data", async function (req, res, next) {
  var cityList = await cityModel.find();

  for (var i = 0; i < cityList.length; i++) {
    var dataAPI = cityList[i].nom;
    var requete = request("GET", `https://api.openweathermap.org/data/2.5/weather?q=${dataAPI}&lang=fr&units=metric&appid=a6e3eaa80322d67999b7ac143be3fddb`);
    var resultWS = JSON.parse(requete.body);
    await cityModel.updateOne({
      _id: cityList[i]._id
    }, {
      nom: cityList[i].name,
      image: `http://openweathermap.org/img/wn/${resultWS.weather[0].icon}.png`,
      descriptif: resultWS.weather[0].description,
      tempMin: resultWS.main.temp_min,
      tempMax: resultWS.main.temp_max,
    });
  }
  cityList = await cityModel.find();
  res.render("weather", {
    cityList: cityList,
    resultWS: resultWS,
  });
});

router.post("/sign-up", async function (req, res, next) {

  var userAlreadyExist = await userModel.findOne({
    email: req.body.email
  })
  if (!userAlreadyExist) {
    var newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    req.session.currentId = await newUser.save();
    req.session.currentUsername = req.body.username;
    res.redirect('/weather');
  } else {
    res.redirect('/');
  }
});

router.post("/sign-in", async function (req, res, next) {
  var userList = await userModel.findOne({
    email: req.body.email_in
  });
  if (userList && req.body.email_in == userList.email && req.body.password_in == userList.password) {
    req.session.currentId = userList._id;
    req.session.currentUsername = userList.username;
    res.redirect('/weather');
    console.log("Je suis connecté");
  } else {
    res.redirect('/');
  }

});

router.get("/logout", async function (req, res, next) {
  req.session.user = null;
  res.redirect('/');
  console.log("Je suis deconnecté");
});

module.exports = router;