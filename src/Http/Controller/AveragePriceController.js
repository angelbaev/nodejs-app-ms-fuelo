var request = require('request');
var config = require('../../../config/params');

exports.index = function (req, res) {
    var queryStringParams = {key: config.fueloApiKey};

    if (req.query.hasOwnProperty('fuel')) {
        queryStringParams.fuel = req.query.fuel;
    }
    if (req.query.hasOwnProperty('date')) {
        queryStringParams.date = req.query.date;
    }

    request.get(config.httpApiFueloUrl + 'price', {qs: queryStringParams}, function (err, extRes, body) {
        res.json({
            status: "success",
            message: "Average Price details!",
            data: JSON.parse(body)
        });
    });
};

