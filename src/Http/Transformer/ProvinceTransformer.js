var Transformer = require('../../Infrastructure/Service/Transformer');
var ProvinceEntity = require('../../Domain/Province/ProvinceEntity');

class ProvinceTransformer extends Transformer{
    /**
     * @param province
     * @param includes
     * @returns {{id: null, code: null, name: null}}
     */
    transform(province, includes = []) {
        var province = new ProvinceEntity(province);

        return {
            id: province.id,
            src_id: province.src_id,
            name: province.name
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

module.exports =  new ProvinceTransformer();
