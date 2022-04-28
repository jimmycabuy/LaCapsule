var express = require("express");
var router = express.Router();
var userModel = require("../models/users");
var bcrypt = require('bcrypt');
var uid2 = require('uid2');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* Sign-up */
router.post("/sign-up", async function (req, res, next) {
  let error = [];
  const data = await userModel.findOne({email : req.body.email })
  var hash = bcrypt.hashSync(req.body.password, 10)
  
  if(data != null){
    error.push("Cet utilisateur est déjà inscrit")
  }
  if(req.body.username === "" || req.body.email === "" || req.body.password === ""){
    error.push("Veuillez remplir tous les champs")
  }

  if (error.length == 0){
  var newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: hash
  });
  await newUser.save();
}
  res.json({ newUser, error });
});

/* Sign-in */
router.post("/sign-in", async function (req, res, next) {
  let error = [];
  var user = await userModel.findOne({
    username: req.body.username
    // password: req.body.password,
  });

  if(req.body.username === "" || req.body.password === ""){
    error.push("Veuillez remplir tous les champs")
  } else if(user && req.body.password !== user?.password){
    error.push("Mot de passe incorrect")
  }else if(!user) {
    error.push(`L'utilisateur ${req.body.username} n'existe pas`)
  } else if(user && req.body.password === user?.password){
    error.push("success")
  }

  res.json({ user, error });
});

module.exports = router;