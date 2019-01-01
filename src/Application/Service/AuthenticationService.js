var BaseService = require('./BaseService');
//var TokenReopsitoryFactory = require('../../Infrastructure/Factory/TokenReopsitoryFactory');

class AuthenticationService extends BaseService{
    /**
     * @param repository
     */
    constructor(repository) {
        super(repository);
    }

    /**
     * @param token
     * @param callback
     * @returns {*}
     */
    findOneByToken(token, callback) {
        return this.repository.findOneByToken(token, callback);
    }
}

//module.exports =  new AuthenticationService(TokenReopsitoryFactory.create());
