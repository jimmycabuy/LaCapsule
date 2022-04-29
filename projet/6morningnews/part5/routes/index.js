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
  const data = await userModel.findOne({
    email: req.body.email
  })
  var hash = bcrypt.hashSync(req.body.password, 10)

  if (data != null) {
    error.push("Cet utilisateur est déjà inscrit")
  }
  if (req.body.username === "" || req.body.email === "" || req.body.password === "") {
    error.push("Veuillez remplir tous les champs")
  }

  if (error.length == 0) {
    var newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      token: uid2(5),
      // wishlist: {
        // title: "",
        // image: "",
        // description: "",
        // content: ""
      // }
    });
    await newUser.save();
  }
  res.json({
    newUser,
    error
  });
});

/* Sign-in */
router.post("/sign-in", async function (req, res, next) {
  let error = [];
  var user = await userModel.findOne({
    username: req.body.username
    // password: req.body.password,
  });

  if (req.body.username === "" || req.body.password === "" || req.body.token === "") {
    error.push("Veuillez remplir tous les champs")
  } else if (user && !bcrypt.compareSync(req.body.password, user.password)) {
    error.push("Mot de passe incorrect")
  } else if (!user) {
    error.push(`L'utilisateur ${req.body.username} n'existe pas`)
  } else if (user && bcrypt.compareSync(req.body.password, user.password) && req.body.token !== user.token) {
    error.push("Token incorrect")
  } else if (user && bcrypt.compareSync(req.body.password, user.password) && req.body.token === user.token) {
    error.push("success")
  }
  res.json({
    user,
    error
  });
});

/* Add article in wishlist */
router.post("/wishlist", async function (req, res, next) {

  let user = await userModel.findOne({token: req.body.token})

  user.wishlist.push({
    title: req.body.articleTitle,
    image: req.body.articleImage,
    description: req.body.articleDescription,
    content: req.body.articleContent
  })
  await user.save()
});

/* Read article in wishlist */
router.get("/wishlist/:token", async function (req, res, next) {
  var result = false;
  let user = await userModel.findOne({token: req.params.token})
  var articles = [];

  if(user !== null){
    articles = user.wishlist;
    result = true;
  }
  res.json({result, articles});
});

module.exports = router;