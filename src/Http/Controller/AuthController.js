var request = require('request');
var md5 = require('md5');
var moment = require('moment');
var config = require('../../../config/params');

var userService = require('../../Application/Service/UserService');
var EntityNotFoundException = require('../../Application/Exception/EntityNotFoundException');
var EntitySaveException = require('../../Application/Exception/EntitySaveException');

exports.authenticate = function (req, res) {
    var params = req.body;

    var statusCode = 200;
    var status = 'success';
    var message = '';
    var data = {};

    if (!params.hasOwnProperty('email') && !params.hasOwnProperty('password')) {
        statusCode = 409;
        status = 'failed';
        message = 'Email and Password fields are required!'
    } else if (!params.hasOwnProperty('email')) {
        statusCode = 409;
        status = 'failed';
        message = 'Email field is required!'
    } else if (!params.hasOwnProperty('password')) {
        statusCode = 409;
        status = 'failed';
        message = 'Password field is required!'
    } else {
        request.post(config.httpAppUserUrl + 'sso/authenticate', {json: {email: params.email, password: params.password}}, function (err, extRes, body) {
            if (err) {
                console.error(err);
                return;
            }

            var data = body.data;
            var userData = data.user;

            userService.findById(userData.id, function (err, user) {
                if (err) {
                    throw new EntityNotFoundException(EntityNotFoundException.getMessage());
                }

                if (user === undefined) {
                    userService.syncUser({id: userData.id, first_name: userData.firstName, last_name: userData.lastName, email: userData.email}, function (err) {
                        if (err) {
                            throw new EntitySaveException(EntitySaveException.getMessage());
                        }
                        res.json({
                            status: "success",
                            message: "New token created!",
                            data: data
                        });
                    })
                } else {
                    res.json({
                        status: "success",
                        message: "New token created!",
                        data: data
                    });
                }
            });
        });
    }
};
