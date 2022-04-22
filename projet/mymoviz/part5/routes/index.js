var express = require("express");
var router = express.Router();
var request = require("sync-request");
var movieModel = require("../models/movies");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET new movie. */
router.get("/new-movies", function (req, res, next) {
  var requete = request(
    "GET",
    "https://api.themoviedb.org/3/movie/popular?api_key=a1829f8cf157c150da708df1a00818c7&language=fr"
  );
  var response = JSON.parse(requete.body);
  res.json({ response });
});

/* Add a movie in the database */
router.post("/wishlist-movie", async function (req, res, next) {
  // var requete = request(
  //   "GET",
  //   "https://api.themoviedb.org/3/movie/popular?api_key=a1829f8cf157c150da708df1a00818c7&language=fr"
  // );
  // var response = JSON.parse(requete.body);

    // for (var i = 0 ; i < 6 ; i++){

    //   var newMovie = new movieModel({
    //     name: response.results[i].original_title,
    //     desc: response.results[i].overview,
    //     img: "https://image.tmdb.org/t/p/w500" + response.results[i].backdrop_path,
    //     note: response.results[i].vote_average,
    //     vote: response.results[i].vote_count,
    //   });

    var newMovie = new movieModel(req.body)
      await newMovie.save();
    // }
    res.json({ newMovie });
});


/* Remove a movie in the database */
router.delete("/wishlist-movie/:name", async function (req, res, next) {

/* Autre technique mais pas celle demandé (juste enlevé le ":name si on veut l'utiliser") */

  // var requete = request(
  //   "GET",
  //   "https://api.themoviedb.org/3/movie/popular?api_key=a1829f8cf157c150da708df1a00818c7&language=fr"
  // );
  // var response = JSON.parse(requete.body);
  
  // for (var i = 0 ; i < 6 ; i++){
  //     await movieModel.deleteOne({id:response.results[i].id })
  // }

  var movieDelete = await movieModel.deleteOne({name: req.params.name})

    res.json({ movieDelete });
});

/* GET tous les films de la database */
router.get("/wishlist-movie", async function (req, res, next) {

  var allMovies = await movieModel.find();

  res.json({ allMovies });
});

router.put("/wishlist-movie/:name/:vote", async function (req, res, next) {

  var movieUpdate = await movieModel.updateOne({name: req.params.name}, {vote: req.params.vote})

  res.json({ movieUpdate });
});

module.exports = router;