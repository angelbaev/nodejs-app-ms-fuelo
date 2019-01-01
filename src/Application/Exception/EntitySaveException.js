module.exports = class EntitySaveException extends Error {
    static getMessage() {
        return 'Entity save fail due to unknown error.';
    }
}
