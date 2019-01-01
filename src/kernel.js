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

                    db.serialize(() => {
                        // Queries scheduled here will be serialized.
                       db.run(content);
                    });
                });
            });
        });
    }
}