var provinceService = require('../../Application/Service/ProvinceService');
var provinceTransformer = require('../Transformer/ProvinceTransformer');
var EntityNotFoundException = require('../../Application/Exception/EntityNotFoundException');

exports.index = function (req, res) {
    provinceService.findAll(function (err, rows) {
        if (err) {
            throw err;
        }

        var collection = provinceService.collection(rows, rows.length);
        res.json({
            status: "success",
            message: "Province retrieved successfully!",
            totalCount: collection.getTotalCount(),
            data: provinceTransformer.transformCollection(collection)
        });
    });
};

exports.view = function (req, res) {
    var id = req.params.id;

    provinceService.findById(id, function (err, province) {
        if (err) {
            throw new EntityNotFoundException(EntityNotFoundException.getMessage());
        }

        res.json({
            status: "success",
            message: "Brand details!",
            data: provinceTransformer.transform(province)
        });
    });
};
