var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/food', function(req, res, next) {
//   res.render('food', { title: 'Express' });
// });

router.get('/food', function(req, res) {
  res.render('food', { name: req.query.food });
});

module.exports = router;