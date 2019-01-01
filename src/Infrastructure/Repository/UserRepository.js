var AbstractBaseRepository = require('./AbstractBaseRepository');

module.exports = class UserRepository extends AbstractBaseRepository{
    /**
     * @param entity
     */
    constructor(entity) {
        super(entity);
    }

    /**
     * @param data
     * @param callback
     * @returns {*}
     */
    syncUser(data, callback) {
        data = this.prepareData(data);

        var sql = 'INSERT INTO `' + this.getTableName() + '`(' + data.fields.join(',') + ') VALUES(' + data.holders.join(',') + ')';
        return this.db.run(sql, data.values, callback);
    }
}