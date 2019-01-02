var AbstractEntity = require('../AbstractEntity');

module.exports = class BrandEntity extends AbstractEntity {
    /**
     * @param params
     */
    constructor(params = {}) {
        super(params);

        this.id = null;
        this.src_id = null;
        this.logo = null;
        this.name = null;

        Object.assign(this, params);
    }

    tableName() {
        return 'brand';
    }
}
