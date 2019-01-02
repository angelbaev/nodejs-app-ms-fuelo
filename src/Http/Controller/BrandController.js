var brandService = require('../../Application/Service/BrandService');
var brandTransformer = require('../Transformer/BrandTransformer');
var EntityNotFoundException = require('../../Application/Exception/EntityNotFoundException');

exports.index = function (req, res) {
    brandService.findAll(function (err, rows) {
        if (err) {
            throw err;
        }

        var collection = brandService.collection(rows, rows.length);
        res.json({
            status: "success",
            message: "Brand retrieved successfully!",
            totalCount: collection.getTotalCount(),
            data: brandTransformer.transformCollection(collection)
        });
    });
};

exports.view = function (req, res) {
    var id = req.params.id;

    brandService.findById(id, function (err, brand) {
        if (err) {
            throw new EntityNotFoundException(EntityNotFoundException.getMessage());
        }

        res.json({
            status: "success",
            message: "Brand details!",
            data: brandTransformer.transform(brand)
        });
    });
};
