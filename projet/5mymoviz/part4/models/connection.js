var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://admin:lacapsule@cluster0.fhj5x.mongodb.net/mymovizapp?retryWrites=true&w=majority', options,
    function (err) {
        console.log(err);
    }
);