var BaseService = require('./BaseService');
var FuelReopsitoryFactory = require('../../Infrastructure/Factory/FuelReopsitoryFactory');

class FuelService extends BaseService{
    /**
     * @param repository
     */
    constructor(repository) {
        super(repository);
    }
}

module.exports =  new FuelService(FuelReopsitoryFactory.create());
