var sqlite3 = require('sqlite3').verbose();
var config = require('./params');

var db = new sqlite3.Database(config.dbPath, (err) => {
    if (err) {
        return console.error(err.message);
    }
});

module.exports = db;