var request = require('request');
var config = require('../../../config/params');

exports.index = function (req, res) {
    var queryStringParams = {key: config.fueloApiKey};

    if (req.query.hasOwnProperty('lat')) {
        queryStringParams.lat = req.query.lat;
    }
    if (req.query.hasOwnProperty('lon')) {
        queryStringParams.lon = req.query.lon;
    }
    if (req.query.hasOwnProperty('fuel')) {
        queryStringParams.fuel = req.query.fuel;
    }
    if (req.query.hasOwnProperty('limit')) {
        queryStringParams.limit = req.query.limit;
    }
    if (req.query.hasOwnProperty('distance')) {
        queryStringParams.distance = req.query.distance;
    }

    request.get(config.httpApiFueloUrl + 'near', {qs: queryStringParams}, function (err, extRes, body) {
        res.json({
            status: "success",
            message: "Nears service stations are retrieved successfully!",
            data: JSON.parse(body)
        });
    });
};

