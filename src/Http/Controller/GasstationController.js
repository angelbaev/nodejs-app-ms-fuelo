var request = require('request');
var config = require('../../../config/params');

exports.index = function (req, res) {
    var queryStringParams = {key: config.fueloApiKey};

    if (req.query.hasOwnProperty('brand_id')) {
        queryStringParams.brand_id = req.query.brand_id;
    }
    if (req.query.hasOwnProperty('fuel')) {
        queryStringParams.fuel = req.query.fuel;
    }
    if (req.query.hasOwnProperty('limit')) {
        queryStringParams.limit = req.query.limit;
    }
    if (req.query.hasOwnProperty('offset')) {
        queryStringParams.offset = req.query.offset;
    }

    request.get(config.httpApiFueloUrl + 'gasstations', {qs: queryStringParams}, function (err, extRes, body) {
        res.json({
            status: "success",
            message: "Gasstations retrieved successfully!",
            data: JSON.parse(body)
        });
    });
};

exports.view = function (req, res) {
    var id = req.params.id;
    var queryStringParams = {key: config.fueloApiKey, id: id};

    request.get(config.httpApiFueloUrl + 'gasstation', {qs: queryStringParams}, function (err, extRes, body) {
        res.json({
            status: "success",
            message: "Gasstation details!",
            data: JSON.parse(body)
        });
    });
};
