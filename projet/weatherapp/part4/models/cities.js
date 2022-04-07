var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
    nom: String,
    image: String,
    descriptif: String,
    tempMin: Number,
    tempMax: Number
})

var cityModel = mongoose.model('cities', citySchema);

module.exports = cityModel;