var AbstractBaseRepository = require('./AbstractBaseRepository');

module.exports = class BrandRepository extends AbstractBaseRepository{
    /**
     * @param entity
     */
    constructor(entity) {
        super(entity);
    }
}