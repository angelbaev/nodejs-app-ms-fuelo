module.exports = class ArraySerializer {
    /**
     * @param resourceKey
     * @param data
     * @returns {*}
     */
    collection(resourceKey, data) {
        return data;
    }

    /**
     * @param resourceKey
     * @param data
     * @returns {*}
     */
    item(resourceKey, data) {
        return data;
    }

    /**
     * @returns {Array}
     */
    null() {
        return [];
    }
}
