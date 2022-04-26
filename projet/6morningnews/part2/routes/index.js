var express = require("express");
var router = express.Router();
var userModel = require("../models/users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* Sign-up */
router.post("/sign-up", async function (req, res, next) {
  let error = [];
  const data = await userModel.findOne({email : req.body.email })
  
  if(data != null){
    error.push("Utilisateur déjà inscrit")
  }
  if(req.body.username === "" || req.body.email === "" || req.body.password === ""){
    error.push("Veuillez remplir toutes les informations")
  }

  if (error.length == 0){
  var newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  await newUser.save();
}
  res.json({ newUser, error });
  res.render("index");
});

/* Sign-in */
router.post("/sign-in", async function (req, res, next) {
  let error = [];
  var user = await userModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if(req.body.username === "" || req.body.password === ""){
    error.push("Veuillez remplir toutes les informations")
  } else if(user == null) {
    error.push("Utilisateur pas inscrit")
  }

  res.json({ user, error });
  res.render("index");
});

module.exports = router;
