var request = require('request');
var config = require('../../../config/params');

exports.index = function (req, res) {
    var queryStringParams = {key: config.fueloApiKey};

    if (req.query.hasOwnProperty('count')) {
        queryStringParams.count = req.query.count;
    }
    if (req.query.hasOwnProperty('brand')) {
        queryStringParams.brand = req.query.brand;
    }
    if (req.query.hasOwnProperty('fuel')) {
        queryStringParams.fuel = req.query.fuel;
    }

    request.get(config.httpApiFueloUrl + 'news', {qs: queryStringParams}, function (err, extRes, body) {
        res.json({
            status: "success",
            message: "News are retrieved successfully!",
            data: JSON.parse(body)
        });
    });
};

