var AbstractBaseRepository = require('./AbstractBaseRepository');

module.exports = class ProvinceRepository extends AbstractBaseRepository{
    /**
     * @param entity
     */
    constructor(entity) {
        super(entity);
    }
}