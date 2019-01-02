var Transformer = require('../../Infrastructure/Service/Transformer');
var FuelEntity = require('../../Domain/Fuel/FuelEntity');

class FuelTransformer extends Transformer{
    /**
     * @param fuel
     * @param includes
     * @returns {{id: null, code: null, name: null}}
     */
    transform(fuel, includes = []) {
        var fuel = new FuelEntity(fuel);

        return {
            id: fuel.id,
            code: fuel.code,
            name: fuel.name
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

module.exports =  new FuelTransformer();
