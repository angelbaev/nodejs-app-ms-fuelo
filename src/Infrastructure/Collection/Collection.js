module.exports = class Collection {
    /**
     * @param values
     * @param totalCount
     */
    constructor(values, totalCount) {
        this.setValues(values);
        this.setTotalCount(totalCount);
    }

    /**
     * @returns {*}
     */
    getValues() {
        return this.values;
    }

    /**
     * @param values
     */
    setValues(values) {
        this.values = values;
    }

    /**
     * @returns {*}
     */
    getTotalCount() {
        return this.totalCount;
    }

    /**
     * @param totalCount
     */
    setTotalCount(totalCount) {
        this.totalCount = totalCount;
    }
}
