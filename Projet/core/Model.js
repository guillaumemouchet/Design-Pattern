/**
 * @class Model
 *
 * Manages the data of the application.
 */
 class Model
 {
    /**
     * Fetch all as object
     * @param {string} name Name of the storage
     * @param {string} classname of class of the stored object
     * @returns 
     */
    static fetchAll(name, classname)
    {
        const jsonData = Storage.getInstance().retrieveAsJson(name);

        const dataObject = [];

        jsonData.forEach(element => {
            dataObject.push(new classname(element));
        });

        return dataObject;
    }

    /**
     * Fetch one as object
     * @param {*} name of the storage
     * @param {*} classname of class of the stored object
     * @returns 
     */
    static fetch(name, classname)
    {
        const jsonData = Storage.getInstance().retrieveAsJson(name);

        return new classname(jsonData);
    }

    /**
     * Fetch as text
     * @param {string} name 
     * @returns {string}
     */
    static fetchAsText(name)
    {
        return Storage.getInstance().retrieveAsText(name);
    }

    /**
     * Save a model in the storage
     * @param {Model} obj Object to save
     * @param {string} name of the storage
     */
    static save(obj, name)
    {
        Storage.getInstance().saveObject(name, obj);
    }

    /**
     * Remove an instance from the storage
     * @param {*} name 
     */
    static remove(name)
    {
        Storage.getInstance().remove(name);
    }

    /**
     * Update an instance in the storage
     * @param {*} params 
     * @param {*} name 
     */
    static update(params, name)
    {
        let jsonData = Storage.getInstance().retrieveAsJson(name);

        params.map(propertyName, value => jsonData[propertyName] = value);

        Storage.getInstance().save(jsonData);
    }

    /**
     * Initialize ingredients in the storage
     */
    static initialize()
    {
        // Generate
        const data = [
            new Ingredient({'name' : 'Bacon', 'price' : 1.9}),
            new Ingredient({'name' : 'Laitue', 'price' :  0.4}),
            new Ingredient({'name' : 'Fromage', 'price' :  0.8}),
            new Ingredient({'name' : 'Poulet grillé', 'price' : 2.2}),
            new Ingredient({'name' : 'Frites', 'price' : 1.4}),
            new Ingredient({'name' : 'Olive', 'price' : 1.2}),
            new Ingredient({'name' : 'jalapenos', 'price' : 2.4}),
            new Ingredient({'name' : 'Salami', 'price' : 0.4}),
            new Ingredient({'name' : 'Jambon', 'price' : 0.8}),
            new Ingredient({'name' : 'Cornichon', 'price' : 0.3}),
            new Ingredient({'name' : 'oignon', 'price' : 0.2}),
            new Ingredient({'name' : 'Avocat', 'price' : 2.7}),
            new Ingredient({'name' : 'Tomate', 'price' : 0.7}),
            new Ingredient({'name' : 'Thon', 'price' : 0.5}),

        ];

        Model.save(data, 'ingredients');
    }
}  