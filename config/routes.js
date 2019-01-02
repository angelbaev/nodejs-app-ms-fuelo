var router = require('express').Router();

var UserController = require('../src/Http/Controller/UserController');
var AuthController = require('../src/Http/Controller/AuthController');
var FuelController = require('../src/Http/Controller/FuelController');
var Brandontroller = require('../src/Http/Controller/BrandController');
var ProvinceController = require('../src/Http/Controller/ProvinceController');

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

// Fuels
router.route('/fuels')
    .get(FuelController.index);
router.route('/fuels/:id')
    .get(FuelController.view);

// Brands
router.route('/brands')
    .get(Brandontroller.index);
router.route('/brands/:id')
    .get(Brandontroller.view);

// Provinces
router.route('/provinces')
    .get(ProvinceController.index);
router.route('/provinces/:id')
    .get(ProvinceController.view);

// Export API routes
module.exports = router;