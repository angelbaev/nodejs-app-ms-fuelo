var fuelService = require('../../Application/Service/FuelService');
var fuelTransformer = require('../Transformer/FuelTransformer');
var EntityNotFoundException = require('../../Application/Exception/EntityNotFoundException');

exports.index = function (req, res) {
    fuelService.findAll(function (err, rows) {
        if (err) {
            throw err;
        }

        var collection = fuelService.collection(rows, rows.length);
        res.json({
            status: "success",
            message: "Fuel retrieved successfully!",
            totalCount: collection.getTotalCount(),
            data: fuelTransformer.transformCollection(collection)
        });
    });
};

exports.view = function (req, res) {
    var id = req.params.id;

    fuelService.findById(id, function (err, fuel) {
        if (err) {
            throw new EntityNotFoundException(EntityNotFoundException.getMessage());
        }

        res.json({
            status: "success",
            message: "Fuel details!",
            data: fuelTransformer.transform(fuel)
        });
    });
};
