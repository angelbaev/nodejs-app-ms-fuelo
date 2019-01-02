var fs = require('fs');

module.exports = class Kernel {
    constructor(app, db) {
        this.app = app;
        this.db = db;
    }

    init() {
        this.runMigrations();
    }

    runMigrations() {
        var dirname = __dirname + '/../migrations/';
        var db = this.db;
        return db.all('SELECT * FROM `migration`', [], function (err, migrations) {
            var executed = [];
            migrations.forEach((item) => {
                executed.push(item.migration);
            });
            fs.readdir(dirname, function(err, filenames) {
                if (err) {
                    onError(err);
                    return;
                }
                filenames.forEach(function(filename) {
                    fs.readFile(dirname + filename, 'utf-8', function(err, content) {
                        if (err) {
                            onError(err);
                            return;
                        }

                        if (executed.indexOf(filename) === -1) {
                            db.serialize(() => {
                                // Queries scheduled here will be serialized.
                                var sql = 'INSERT INTO `migration`(migration, apply) VALUES("' + filename + '", "1")';
                                db.run(content).
                                run(sql);
                            });
                        }
                    });
                });
            });
        });
    }
}