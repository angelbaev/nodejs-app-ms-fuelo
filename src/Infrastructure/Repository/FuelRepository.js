var AbstractBaseRepository = require('./AbstractBaseRepository');

module.exports = class FuelRepository extends AbstractBaseRepository{
    /**
     * @param entity
     */
    constructor(entity) {
        super(entity);
    }
}