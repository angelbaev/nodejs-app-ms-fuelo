var AbstractEntity = require('../AbstractEntity');

module.exports = class UserEntity extends AbstractEntity {
    /**
     * @param params
     */
    constructor(params = {}) {
        super(params);

        this.id = null;
        this.first_name = null;
        this.last_name = null;
        this.email = null;

        Object.assign(this, params);
    }

    tableName() {
        return 'user';
    }
}
