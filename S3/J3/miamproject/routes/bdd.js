var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://admin:lacapsule@cluster0.uwjdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options,
    function (err) {
        console.log(err);
    }
);

var mealSchema = mongoose.Schema({
    meal: String,
    name: String,
    delivery: String,
    address: String,
    phone: String,
    beverage: String
})

var mealModel = mongoose.model('meals', mealSchema);

module.exports = mealModel;