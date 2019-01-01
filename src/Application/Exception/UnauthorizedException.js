module.exports = class UnauthorizedException extends Error {
    static getMessage() {
        return 'An authentication exception occurred.';
    }
}
