var BaseService = require('./BaseService');
var UserReopsitoryFactory = require('../../Infrastructure/Factory/UserReopsitoryFactory');

class UserService extends BaseService{
    /**
     * @param repository
     */
    constructor(repository) {
        super(repository);
    }

    /**
     * @param data
     * @param callback
     * @returns {*}
     */
    syncUser(data, callback) {
        return this.repository.syncUser(data, callback);
    }
}

module.exports =  new UserService(UserReopsitoryFactory.create());
