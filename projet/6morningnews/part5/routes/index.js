var express = require('express');
var router = express.Router();

var uid2 = require('uid2')
var bcrypt = require('bcrypt');

var userModel = require('../models/users')


router.post('/sign-up', async function (req, res, next) {

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('utilisateur déjà présent')
  }

  if (req.body.usernameFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }


  if (error.length == 0) {

    var hash = bcrypt.hashSync(req.body.passwordFromFront, 10);
    var newUser = new userModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: hash,
      token: uid2(32),
    })

    saveUser = await newUser.save()


    if (saveUser) {
      result = true
      token = saveUser.token
    }
  }


  res.json({ result, saveUser, error, token })
})

router.post('/sign-in', async function (req, res, next) {

  var result = false
  var user = null
  var error = []
  var token = null

  if (req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {
    user = await userModel.findOne({
      email: req.body.emailFromFront,
    })


    if (user) {
      if (bcrypt.compareSync(req.body.passwordFromFront, user.password)) {
        result = true
        token = user.token
      } else {
        result = false
        error.push('mot de passe incorrect')
      }

    } else {
      error.push('email incorrect')
    }
  }


  res.json({ result, user, error, token })


})

router.post('/wishlist', async function (req, res) {
  var result = false
  var user = await userModel.findOne({ token: req.body.token })

  if (user !== null && !user.articles.find(article => article.title === req.body.title)) {
    user.articles.push({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      urlToImage: req.body.urlToImage,
    })

    var userUpdated = await user.save()
    if (userUpdated) {
      result = true
    }
  }

  res.json({ result })
})

router.get('/wishlist/:token', async function (req, res) {
  var result = false
  var user = await userModel.findOne({ token: req.params.token })
  var articles = []
  
  if (user !== null) {
    articles = user.articles
    result = true
  }

  res.json({ result, articles })
})

router.delete('/wishlist', async function (req, res) {
  var result = false
  var user = await userModel.findOne({ token: req.body.token })

  if (user !== null) {
    user.articles = user.articles.filter(article => article.title !== req.body.title)

    var userUpdated = await user.save()
    if (userUpdated) {
      result = true
    }
  }

  res.json({ result })
});

module.exports = router;
