var express = require('express');
var router = express.Router();
var request = require("sync-request");
var movieModel = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET new movie. */
router.get('/new-movies', function(req, res, next) {
  var requete = request("GET", "https://api.themoviedb.org/3/movie/popular?api_key=a1829f8cf157c150da708df1a00818c7&language=fr")
  var response = JSON.parse(requete.body);
  res.json({response});
});

/* Add a movie in the Database */
router.post('/wishlist-movie', async function(req, res, next) {

  var requete = request("GET", "https://api.themoviedb.org/3/movie/popular?api_key=a1829f8cf157c150da708df1a00818c7&language=fr")
  var response = JSON.parse(requete.body);
  
  var newMovie = new movieModel({
    name: response.results[0].original_title,
    desc: response.results[0].overview,
    img: "https://image.tmdb.org/t/p/w500" + response.results[0].backdrop_path,
    note: response.results[0].vote_average,
    vote: response.results[0].vote_count
  })
  await newMovie.save();
  res.json({newMovie});
});

module.exports = router;