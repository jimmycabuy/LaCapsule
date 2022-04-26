var express = require("express");
var router = express.Router();
var cityModel = require('../models/cities');
var userModel = require('../models/users');
var request = require("sync-request");

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
    req.session.user = req.body.username;
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
    req.session.user = userList.username;
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