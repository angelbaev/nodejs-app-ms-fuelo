var UserEntity = require('../../Domain/User/UserEntity');
var UserRepository = require('../Repository/UserRepository');

module.exports = class UserReopsitoryFactory {
    /**
     * @returns {module.UserRepository|*}
     */
    static create() {
        return new UserRepository(
            new UserEntity()
        );
    }
}