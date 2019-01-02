var AbstractEntity = require('../AbstractEntity');

module.exports = class ProvinceEntity extends AbstractEntity {
    /**
     * @param params
     */
    constructor(params = {}) {
        super(params);

        this.id = null;
        this.src_id = null;
        this.name = null;

        Object.assign(this, params);
    }

    tableName() {
        return 'province';
    }
}
