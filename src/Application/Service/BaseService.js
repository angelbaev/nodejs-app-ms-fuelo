module.exports = class BaseService {
    /**
     * @param repository
     */
    constructor(repository) {
        this.repository = repository;
    }

    /**
     * @returns {*}
     */
    getRepository () {
        return this.repository;
    }

    /**
     * @returns {*|string[]}
     */
    attributes() {
        return this.repository.attributes();
    }

    /**
     * @param requst
     * @returns {boolean}
     */
    validate (requst = {}) {
        return true;
    }
    /**
     * @param values
     * @param totalCount
     * @returns {*|module.Collection}
     */
    collection (values, totalCount) {
        return this.repository.collection(values, totalCount);
    }

    /**
     * @param row
     *
     * @returns {*|void}
     */
    assign(row) {
        return this.repository.assign(row);
    }

    /**
     * @param params
     * @returns {Array}
     */
    checkAllowedParams(params = {}) {
        var attributes = Object.keys(params);
        var notAllowedParams = [];

        if (attributes.length === 0) {
            return notAllowedParams;
        }

        attributes.forEach((value) => {
           if (this.attributes().indexOf(value) === -1) {
               notAllowedParams.push(value);
           }
        });

        return notAllowedParams;
    }

    /**
     * @param criteria
     * @param callback
     *
     * @returns {*}
     */
    findAll(callback){
        return this.repository.findAll(callback);
    }

    /**
     *
     * @param criteria
     * @param orderBy
     * @param callback
     * @returns {*}
     */
    findAllBy(criteria, orderBy = null, callback) {
        return this.repository.findAllBy(criteria, orderBy, callback);
    }

    /**
     * @param criteria
     * @param callback
     * @returns {*}
     */
    findTotalBy(criteria, callback) {
        return this.repository.findTotalBy(criteria, callback);
    }

    /**
     * @param criteria
     * @param page
     * @param pageSize
     * @param orderBy
     * @param callback
     * @returns {*}
     */
    findPagedBy(criteria, page, pageSize, orderBy = null, callback) {
        var limit = pageSize;
        var offset = (page - 1) * pageSize;

        return this.repository.findPagedBy(criteria, limit, offset, orderBy, callback);
    }

    /**
     * @param criteria
     * @param orderBy
     * @param callback
     * @returns {*}
     */
    findOneBy(criteria, orderBy = null, callback) {
        return this.repository.findOneBy(criteria, orderBy, callback);
    }

    /**
     * @param id
     * @param callback
     * @returns {*}
     */
    findById(id, callback) {
        return this.repository.findById(id, callback);
    }

    /**
     * @param data
     * @param callback
     * @returns {data}
     */
    create(data, callback) {
        return this.repository.create(data, callback);
    }

    /**
     * @param data
     * @param id
     * @param callback
     * @returns {*|void|IDBRequest|Promise<void>}
     */
    update(data, id, callback) {
        return this.repository.update(data, id, callback);
    }

    /**
     * @param id
     * @param callback
     * @returns {*}
     */
    remove(id, callback) {
        return this.repository.remove(id, callback);
    }
}
