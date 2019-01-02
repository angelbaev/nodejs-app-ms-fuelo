var BaseService = require('./BaseService');
var BrandReopsitoryFactory = require('../../Infrastructure/Factory/BrandReopsitoryFactory');

class BrandService extends BaseService{
    /**
     * @param repository
     */
    constructor(repository) {
        super(repository);
    }
}

module.exports =  new BrandService(BrandReopsitoryFactory.create());
