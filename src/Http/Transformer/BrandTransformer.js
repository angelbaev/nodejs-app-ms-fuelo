var Transformer = require('../../Infrastructure/Service/Transformer');
var BrandEntity = require('../../Domain/Brand/BrandEntity');

class BrandTransformer extends Transformer{
    /**
     * @param brand
     * @param includes
     * @returns {{id: null, code: null, name: null}}
     */
    transform(brand, includes = []) {
        var brand = new BrandEntity(brand);

        return {
            id: brand.id,
            src_id: brand.src_id,
            logo: brand.logo,
            name: brand.name
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

module.exports =  new BrandTransformer();
