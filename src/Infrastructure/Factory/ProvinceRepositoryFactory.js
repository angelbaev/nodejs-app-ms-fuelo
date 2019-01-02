var ProvinceEntity = require('../../Domain/Province/ProvinceEntity');
var ProvinceRepository = require('../Repository/ProvinceRepository');

module.exports = class ProvinceRepositoryFactory {
    /**
     * @returns {module.ProvinceRepository|*}
     */
    static create() {
        return new ProvinceRepository(
            new ProvinceEntity()
        );
    }
}