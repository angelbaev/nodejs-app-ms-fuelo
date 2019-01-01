var router = require('express').Router();

var UserController = require('../src/Http/Controller/UserController');
var AuthController = require('../src/Http/Controller/AuthController');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'success',
        message: 'Welcome to Simple MVC DDD REST API, Its Working!',
    });
});

// Users
router.route('/users')
    .get(UserController.index);
router.route('/users/:id')
    .get(UserController.view);

//Authentications
router.route('/sso/authenticate')
    .post(AuthController.authenticate);


// Export API routes
module.exports = router;