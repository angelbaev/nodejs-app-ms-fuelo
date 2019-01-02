var BrandEntity = require('../../Domain/Brand/BrandEntity');
var BrandRepository = require('../Repository/BrandRepository');

module.exports = class BrandReopsitoryFactory {
    /**
     * @returns {module.BrandRepository|*}
     */
    static create() {
        return new BrandRepository(
            new BrandEntity()
        );
    }
}