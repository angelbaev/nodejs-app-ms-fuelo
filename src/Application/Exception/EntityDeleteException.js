module.exports = class EntityDeleteException extends Error {
    static getMessage() {
        return 'Entity delete fail due to unknown error.';
    }
}
