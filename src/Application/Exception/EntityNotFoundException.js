module.exports = class EntityNotFoundException extends Error {
    static getMessage() {
        return 'Entity not found.';
    }
}
