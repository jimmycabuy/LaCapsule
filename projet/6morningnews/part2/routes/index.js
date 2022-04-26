var express = require("express");
var router = express.Router();
var userModel = require("../models/users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* Sign-up */
router.post("/sign-up", async function (req, res, next) {
  var newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  await newUser.save();
  res.json({ newUser });
  res.render("index");
});

/* Sign-in */
router.post("/sign-in", async function (req, res, next) {
  var user = await userModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({ user });
  res.render("index");
});

module.exports = router;
