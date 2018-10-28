const Homepage = require('../models/homepage_model');

//test controller
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.details = function (req, res) {
    console.log("inside details controller:"+req.params.id)
    Homepage.findById(req.params.id, function (err, id1) {
        if (err) return next(err);
        res.send(id1);
    })
};