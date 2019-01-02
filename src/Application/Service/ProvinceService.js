var BaseService = require('./BaseService');
var ProvinceRepositoryFactory = require('../../Infrastructure/Factory/ProvinceRepositoryFactory');

class ProvinceService extends BaseService{
    /**
     * @param repository
     */
    constructor(repository) {
        super(repository);
    }
}

module.exports =  new ProvinceService(ProvinceRepositoryFactory.create());
