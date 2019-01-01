var Transformer = require('../../Infrastructure/Service/Transformer');
var UserEntity = require('../../Domain/User/UserEntity');

class UserTransformer extends Transformer{
    /**
     * @param user
     * @param includes
     * @returns {{id: null, firstName: null, lastName: null, email: null, status: null}}
     */
    transform(user, includes = []) {
        var user = new UserEntity(user);

        return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            status: user.status
        }
    }

    /**
     * @param collection
     * @param includes
     * @returns {Array}
     */
    transformCollection(collection, includes = []) {
        var resource = collection.getValues();
        var items = [];

        resource.forEach((row) => {
            items.push(
                this.transform(row)
            );
        });

        return items;
    }
}

module.exports =  new UserTransformer();
