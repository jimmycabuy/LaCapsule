var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/pageTwo', function(req, res, next) {
  req.session.firstName = req.body.firstName;
  res.render('you', { firstName: req.session.firstName });
});

router.get('/pageTree', function(req, res, next) {
  res.render('youagain', { firstName: req.session.firstName });
});

module.exports = router;