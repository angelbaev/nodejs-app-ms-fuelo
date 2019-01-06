var cache = require('memory-cache');

class CacheService {
    /**
     * @param cache
     */
    constructor(cache) {
        if(!CacheService.instance) {
            this.cache = cache;
        }

        CacheService.instance = this;

        return CacheService.instance;
    }

    /**
     * @param key
     * @returns {*}
     */
    get(key) {
        return this.cache.get(key);
    }

    /**
     * @param key
     * @param value
     * @param time
     * @param timeoutCallback
     * @returns {*|IDBRequest|Promise<void>}
     */
    put(key, value, time, timeoutCallback) {
        return this.cache.put(key, value, time, timeoutCallback);
    }

    /**
     * @param key
     * @returns {*|boolean}
     */
    remove(key) {
        return this.cache.del(key);
    }

    /**
     * @returns {*}
     */
    size() {
        return this.cache.size();
    }

    /**
     * @returns {*|number}
     */
    memsize() {
        return this.cache.memsize();
    }

    /**
     * @returns {*|void|IDBRequest}
     */
    clear() {
        return this.cache.clear();
    }

    /**
     * @param bool
     * @returns {*|void}
     */
    debug(bool) {
        return this.cache.debug(bool);
    }

    /**
     * @returns {*|number}
     */
    hits() {
        return this.cache.hits();
    }

    /**
     * @returns {*}
     */
    keys() {
        return this.cache.keys();
    }

    /**
     * @param jsonToImport
     * @param options
     * @returns {*}
     */
    importJson(jsonToImport, options) {
        return this.cache.importJson(jsonToImport, options);
    }

    /**
     * @returns {*}
     */
    exportJson() {
        return this.cache.exportJson();
    }
}

var instance = new CacheService(cache);

Object.freeze(instance);

module.exports = instance;
