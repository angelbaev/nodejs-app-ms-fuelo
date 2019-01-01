var userService = require('../../Application/Service/UserService');
var userTransformer = require('../Transformer/UserTransformer');
var EntityNotFoundException = require('../../Application/Exception/EntityNotFoundException');

exports.index = function (req, res) {
    userService.findAll(function (err, rows) {
        if (err) {
            throw err;
        }

        var collection = userService.collection(rows, rows.length);
        res.json({
            status: "success",
            message: "Users retrieved successfully!",
            totalCount: collection.getTotalCount(),
            data: userTransformer.transformCollection(collection)
        });
    });
};

exports.view = function (req, res) {
    var id = req.params.id;

    userService.findById(id, function (err, user) {
        if (err) {
            throw new EntityNotFoundException(EntityNotFoundException.getMessage());
        }

        res.json({
            status: "success",
            message: "User details!",
            data: userTransformer.transform(user)
        });
    });
};
