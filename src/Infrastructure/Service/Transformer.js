module.exports = class Transformer {
    /**
     * @param entity
     * @param includes
     * @returns {{}}
     */
    transform(entity, includes = []) {
        return {};
    }

    /**
     * @param collection
     * @param includes
     * @returns {Array}
     */
    transformCollection(collection, includes = []) {
        return [];
    }
}
