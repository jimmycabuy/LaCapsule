var mongoose = require("mongoose");

var movieSchema = mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  note: Number,
  vote: Number
});

var movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;