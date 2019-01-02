var FuelEntity = require('../../Domain/Fuel/FuelEntity');
var FuelRepository = require('../Repository/FuelRepository');

module.exports = class FuelReopsitoryFactory {
    /**
     * @returns {module.FuelRepository|*}
     */
    static create() {
        return new FuelRepository(
            new FuelEntity()
        );
    }
}