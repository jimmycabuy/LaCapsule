var mongoose = require('mongoose');

var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://admin:lacapsule@cluster0.fhj5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options,
    function (err) {
        console.log(err);
    }
);

var citySchema = mongoose.Schema({
    nom: String,
    image: String,
    descriptif: String,
    tempMin: Number,
    tempMax: Number
})

var cityModel = mongoose.model('index', citySchema);

module.exports = cityModel;