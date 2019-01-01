module.exports = class AbstractEntity  {
    /**
     * @param params
     */
    constructor(params = {}) {
        Object.assign(this, params);
    }

    /**
     * @returns {null}
     */
    tableName() {
        return null;
    }
}