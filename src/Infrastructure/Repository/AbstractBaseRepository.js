var db = require('../../../config/db');
var md5 = require('md5');
var Collection = require('../Collection/Collection');

module.exports = class AbstractBaseRepository {
    constructor(entity) {
        this.entity = entity;
        this.db = db;
    }

    /**
     * @returns {*}
     */
    getEntityName() {
        return this.entity.constructor.name;
    }

    /**
     * @returns {null|string}
     */
    getTableName() {
        return this.entity.tableName();
    }

    /**
     * @returns {string[]}
     */
    attributes () {
        return Object.keys(this.entity);
    }

    /**
     * @param values
     * @param totalCount
     * @returns {module.Collection|*}
     */
    collection(values, totalCount) {
        return new Collection(values, totalCount);
    }

    prepareData(data) {
        var fields = Object.keys(data);
        var values = Object.values(data);
        var holders = [];
        fields.forEach((value) => {
            holders.push('?');
        });

        return {
            fields : fields,
            values : values,
            holders : holders
        };
    }
    /**
     * @param row
     * @returns {*}
     */
    assign(row) {
        try {
            return new this.entity.constructor(row);
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * @param criteria
     * @param callback
     * @returns {*}
     */
    findAll(callback){
        return db.all('SELECT * FROM `' + this.getTableName() +'`', [], callback);
    }

    /**
     * @param criteria
     * @param orderBy
     * @param callback
     */
    findAllBy(criteria, orderBy = null, callback) {
        var sql = ['SELECT * FROM `' + this.getTableName() +'`'];
        criteria = this.prepareCriteria(criteria);

        sql.push('WHERE ' + criteria.conditions.join(' ' + criteria.conditionExpr + ' '));

        if (orderBy !== null) {
            sql.push('ORDER BY ' + orderBy);
        }

        return db.all(sql.join(' '), criteria.values, callback);
    }

    /**
     * @param criteria
     * @param callback
     * @returns {*}
     */
    findTotalBy(criteria, callback) {
        var sql = ['SELECT count(id) as `total` FROM `' + this.getTableName() +'`'];
        criteria = this.prepareCriteria(criteria);

        sql.push('WHERE ' + criteria.conditions.join(' ' + criteria.conditionExpr + ' '));
        sql.push('LIMIT 1');

        return db.get(sql.join(' '), criteria.values, callback);
    }

    /**
     * @param criteria
     * @param limit
     * @param offset
     * @param orderBy
     * @param callback
     * @returns {*}
     */
    findPagedBy(criteria, limit, offset, orderBy = null, callback) {
        var sql = ['SELECT * FROM `' + this.getTableName() +'`'];
        criteria = this.prepareCriteria(criteria);

        sql.push('WHERE ' + criteria.conditions.join(' ' + criteria.conditionExpr + ' '));

        if (orderBy !== null) {
            sql.push('ORDER BY ' + orderBy);
        }
        sql.push('LIMIT ' + limit + ' OFFSET ' + offset);

        return db.all(sql.join(' '), criteria.values, callback);
    }

    /**
     * @param id
     * @param callback
     * @returns {*}
     */
    findById(id, callback) {
        return db.get('SELECT * FROM `' + this.getTableName() +'` WHERE id = ? LIMIT 1', [id], callback);
    }

    /**
     * @param criteria
     * @param orderBy
     * @param callback
     * @returns {*}
     */
    findOneBy(criteria, orderBy = null, callback) {
        var sql = ['SELECT * FROM `' + this.getTableName() +'`'];
        criteria = this.prepareCriteria(criteria);

        sql.push('WHERE ' + criteria.conditions.join(' ' + criteria.conditionExpr + ' '));

        if (orderBy !== null) {
            sql.push('ORDER BY ' + orderBy);
        }
        sql.push('LIMIT 1');

        return db.get(sql.join(' '), criteria.values, callback);
    }

    /**
     *
     * @param criteria
     * [ { field: 'value' } ]
     * [ { expr: '>', field: 'value' } ]
     * [ 'and' / 'or',  { field: 'value' }, { field1: 'value' }]
     * [ 'and' / 'or',  { expr: '>', field: 'value' }, { expr: '>', ield1: 'value' }]
     */
    prepareCriteria(criteria) {
        var conditions = [];
        var values = [];
        var conditionExpr = 'and';
        var field, value, expr;

        if (typeof(criteria[0]) === 'string') {
            conditionExpr = fruits.shift();
        }

        criteria.forEach((criteriaItem) => {
            if (Object.keys(criteriaItem).length === 2) {
                expr = Object.values(criteriaItem)[0];
                field = Object.keys(criteriaItem)[1];
                value = Object.values(criteriaItem)[1];

                conditions.push('`' + field + '`' + expr +' ?');
                values.push(value);
            } else {
                field = Object.keys(criteriaItem)[0];
                value = Object.values(criteriaItem)[0];
                conditions.push('`' + field + '`= ?');
                values.push(value);
            }
        });

        return {
            conditionExpr: conditionExpr,
            conditions: conditions,
            values: values
        };
    }

    /**
     * @param data
     * @param callback
     * @returns {*}
     */
    create(data, callback) {
        var date = new Date();
        data.id = md5(date.getMilliseconds());
        data = this.prepareData(data);

        var sql = 'INSERT INTO `' + this.getTableName() + '`(' + data.fields.join(',') + ') VALUES(' + data.holders.join(',') + ')';
        return db.run(sql, data.values, callback);
    }

    /**
     * @param data
     * @param id
     * @param callback
     * @returns {*}
     */
    update(data, id, callback) {
        data = this.prepareData(data);

        var fieldHolders = [];
        data.fields.forEach((field) => {
            fieldHolders.push(field + '= ?');
        });
        data.values.push(id);

        var sql = 'UPDATE `' + this.getTableName() + '` SET ' + fieldHolders.join(',') + ' WHERE id= ?';
        return db.run(sql, data.values, callback);
    }

    /**
     * @param id
     * @param callback
     * @returns {*}
     */
    remove(id, callback) {
        var sql = 'DELETE FROM `' + this.getTableName() + '` WHERE id= ?';
        return db.run(sql, id, callback);
    }
}
