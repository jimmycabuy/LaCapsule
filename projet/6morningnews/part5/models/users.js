var mongoose = require("mongoose");

var wishlistSchema = mongoose.Schema({
  title: String,
  image: String,
  description: String,
  content: String
})

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  wishlist: [wishlistSchema]
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;