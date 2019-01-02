var AbstractEntity = require('../AbstractEntity');

module.exports = class FuelEntity extends AbstractEntity {
    /**
     * @param params
     */
    constructor(params = {}) {
        super(params);

        this.id = null;
        this.code = null;
        this.name = null;

        Object.assign(this, params);
    }

    tableName() {
        return 'fuel';
    }
}
