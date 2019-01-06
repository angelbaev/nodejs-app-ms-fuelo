var request = require('request');
var url = require('url');
var cacheService = require('../../Infrastructure/Service/CacheService');
var config = require('../../../config/params');

var UnauthorizedException = require('../../Application/Exception/UnauthorizedException');

exports.AuthMiddleware = function (req, res, next) {
    var path = url.parse(req.url).pathname;
    var skipVerify = [''];
    if (path.length > 1) {
        var routeName = path.split('/')[1];

        if (routeName.startsWith('sso')) {
            next();
        } else {
            if (req.token === undefined) {
                res.status(403).json({
                    status: "failed",
                    message: UnauthorizedException.getMessage(),
                    data: {}
                });
            } else {
                var requestCache = cacheService.get('sso_verify');
                if (requestCache) {
                    var token = requestCache;
                    if (token.verify) {
                        next();
                    } else {
                        res.status(403).json({
                            status: "failed",
                            message: UnauthorizedException.getMessage(),
                            data: {}
                        });
                    }
                } else {
                    request.post(config.httpAppUserUrl + 'sso/verify', {json: {token: req.token}}, function (err, extRes, body) {
                        if (err) {
                            throw err;
                        }
                        cacheService.put('sso_verify', body.data, config.cacheDuration);
                        var token = body.data;
                        if (token.verify) {
                            next();
                        } else {
                            res.status(403).json({
                                status: "failed",
                                message: UnauthorizedException.getMessage(),
                                data: {}
                            });
                        }
                    });
                }
            }
        }
    } else {
        next();
    }
};