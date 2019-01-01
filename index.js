var app = require('./config/bootstrap');
var db = require('./config/db');
var Kernel = require('./src/kernel');

var bearerToken = require('express-bearer-token');
var bodyParser = require('body-parser');
var cluster = require('cluster');
var os = require('os');
var routers = require('./config/routes');
var middleware = require('./src/Http/Middleware/AuthMiddleware');

if(cluster.isMaster && app.params.clusterOptimization) {
    for(var i = 0; i < os.cpus().length; i++){
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });
    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    // Configure bodyparser to handle post requests
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use(bearerToken({
        bodyKey: 'access_token',
        queryKey: 'access_token',
        headerKey: 'Bearer',
        reqKey: 'token'
    }));

    var kernel = new Kernel(app, db);
    kernel.init();

    app.use('/', middleware.AuthMiddleware);

// Import routes
    app.use('/', routers);

    app.listen(app.params.port, function() {
        console.log('Express server listening on port ' + app.params.port);
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });
}
